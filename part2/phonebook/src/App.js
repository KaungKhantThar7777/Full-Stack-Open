import React, { useState } from "react";

import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebook from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

  React.useEffect(() => {
    phonebook.getAll().then(({ data }) => setPersons(data));
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAlreadyExist = persons.find((person) => person.name === newName);

    const newPerson = { name: newName, number: newPhone };
    if (isAlreadyExist) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        phonebook.update(isAlreadyExist.id, newPerson).then(({ data }) => {
          setPersons((persons) => persons.map((p) => (p.name === newName ? data : p)));
          setNotification({ color: "green", message: `Updated ${data.name}` });
          setNewName("");
          setNewPhone("");
        });
      }
    } else {
      phonebook.create(newPerson).then(({ data }) => {
        setPersons(persons.concat(data));
        setNotification({ color: "green", message: `Added ${data.name}` });
        setNewName("");
        setNewPhone("");
      });
    }
  };

  const deleteUser = (id) => {
    phonebook.remove(id).then(() => setPersons((persons) => persons.filter((p) => p.id !== id)));
  };

  const personsToShow = filter
    ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification {...notification} />}
      <Filter value={filter} handleChange={(e) => setFilter(e.target.value)} />
      <h2>Add a new </h2>
      <PersonForm
        name={newName}
        handleNameChange={handleNameChange}
        phone={newPhone}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deleteUser={deleteUser} />
    </div>
  );
};

export default App;

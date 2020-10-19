import React, { useState } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(({ data }) => setPersons(data));
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
    if (isAlreadyExist) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = { name: newName, number: newPhone };
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then(({ data }) => {
          setPersons(persons.concat(data));
          setNewName("");
          setNewPhone("");
        });
    }
  };

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;

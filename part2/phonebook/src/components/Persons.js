import React from "react";

const Persons = ({ persons, deleteUser }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteUser(id);
    }
  };
  return (
    <div>
      {persons.map(({ id, name, number }) => (
        <p key={id}>
          {name} {number}{" "}
          <button onClick={() => handleDelete(id, name)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;

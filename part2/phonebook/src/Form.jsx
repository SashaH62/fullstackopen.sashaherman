import { useState } from "react";

const Form = ({ persons, setPersons, setFilter }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName) {
      alert(`Name field cannot be empty`);
      return;
    }

    const personExists = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (personExists) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }),
    );
    setFilter("");
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;

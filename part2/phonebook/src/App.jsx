import { useState } from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";
import Form from "./Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const showFilteredNames = () => {
    if (filter) {
      return persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return persons;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h3>Add New</h3>
      <Form persons={persons} setPersons={setPersons} setFilter={setFilter} />
      <h3>Numbers</h3>
      <Results names={showFilteredNames()} />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Results from "./components/Results";
import Form from "./Form";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

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

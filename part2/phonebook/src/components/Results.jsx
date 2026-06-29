import Person from "./Person";

const Results = ({ names }) => {
  return (
    <div>
      <ul>
        {names.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default Results;

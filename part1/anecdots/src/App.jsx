import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const AnecdoteOfDay = ({ votes, anecdotes, selected }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </>
  );
};

const AnecdoteHighestRated = ({ anecdotes, highestRated }) => {
  if (highestRated[1] == 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <p>No votes yet</p>
      </>
    );
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[highestRated[0]]}</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const initVotesObject = Object.fromEntries(
    Array.from({ length: anecdotes.length }, (_, index) => [index, 0]),
  );

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initVotesObject);

  const handleNext = () => {
    let randomVal = Math.floor(Math.random() * anecdotes.length);
    while (randomVal === selected) {
      randomVal = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomVal);
  };

  const handleVote = () => {
    const votesCopy = { ...votes };
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const getHighestRatedAnecdote = () => {
    const highestRated = Object.entries(votes).reduce((max, current) => {
      return current[1] > max[1] ? current : max;
    });

    return highestRated;
  };

  return (
    <div>
      <AnecdoteOfDay anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button onClick={handleVote} text="Vote" />
      <Button onClick={handleNext} text="Next Anecdote" />
      <AnecdoteHighestRated
        anecdotes={anecdotes}
        highestRated={getHighestRatedAnecdote()}
      />
    </div>
  );
};

export default App;

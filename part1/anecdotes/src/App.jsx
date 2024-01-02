import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(new Array(8).fill(0))
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0)

  const handleNextClick = () => {
    const nextRandomAnecdote = getRandomNumber();
    setSelected(nextRandomAnecdote);
  }

  const handleVote = () => {
    // handle increasing vote by 1 on the selected anecdote
    const copy = [...points];
    copy[selected] += 1;
    setPoint(copy);
    
    // handle finding the highest voted anecdote
    const mostVoted = getHighestVote(copy);
    setMostVotedAnecdote(mostVoted);
  }

  return (
    <div>
      <Header text="Anecdote of the day"></Header>

      {anecdotes[selected]} 
      <br></br>
      has votes {points[selected]}
      <Button handleClick={handleVote} text="vote"></Button>
      <Button handleClick={handleNextClick} text="next anecdote"></Button>

      <Header text="Anecdote with most votes"></Header>
      {anecdotes[mostVotedAnecdote]}
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}> {text}</button>
    </div>
  )
}

const getRandomNumber = () => Math.floor(Math.random() * 8);

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const getHighestVote = (array) => array.indexOf(Math.max(...array))

export default App
import React, { useState } from 'react'

const Display = (props) => {
  let maxNumber = 0
  let maxIndx = 0
  for (let i = 0; i < props.vote.length; i++) {
    if(props.vote[i] > maxNumber) {
      maxIndx = i
      maxNumber = props.vote[i]
    }
  }

  return(
    <div>
      <p>{props.anecdotes[maxIndx]}</p>
      <p>This quote has {props.vote[maxIndx]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0)

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(points)

  const handleNewClick = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const handleVoteClick = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This quote has {vote[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNewClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Display vote={vote} anecdotes={anecdotes} />
    </div>
  )
}

export default App
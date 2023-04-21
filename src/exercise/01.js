// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'

const initialCount = 0

function countReducer(count, newCount) {
  // callback setCount will update based on what is passed in
  return newCount
}



function Counter({step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = useReducer(countReducer,initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter step={10} />
}

export default App

// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'

// newState and action are interchangeable
const countReducer = (state, action) => ({...state,...(typeof action === 'function' ? action(state) : action)})
  // callback setCount will update based on what is passed in
  // state is an object along with state
  // any property the action has which is defined by setState will overwride any property of the state
  // function based
  //determine if function or object, return action called on state if function or return iterable
  




function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, setState] = useReducer(countReducer,{
    count: initialCount
  })

  const {count} = state
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  //const increment = () => setState(currentState => ({count: count + step}))
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter step={10} />
}

export default App

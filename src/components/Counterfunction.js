import { useState } from 'react';
import React from 'react'

function Counterfunction() {

      //create a state
  const [counter, setCounter] = useState(0)

  function incrementcounter() {
    setCounter(counter + 1)
  }
  function decrementCounter() {
    if (counter > 0) { setCounter(counter - 1) }
  }
  function reset() {
    setCounter(0)
  }

  return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid gray',
        margin:'10px',
        padding:'200px',
        backgroundColor:'gray'
      }}
      >        <h3
        className='hi text-center'
        >Your Turn.....!</h3>
        <h1
        className='text-center'
        >{counter}</h1>
        <button
        className='b1'
          style={{
            padding: '10px',
            border: '2px solid gray',
            margin:'4px'
          }}
          onClick={incrementcounter}>Add</button>
        <button
        className='b1'
          style={{
            padding: '10px',
            border: '2px solid gray',
            margin:'4px'
          }}
          onClick={decrementCounter}>Sutract</button>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            border: '2px solid gray',
            margin:'4px'
          }}
          onClick={reset}>Reset</button></div>
  )
}

export default Counterfunction
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  let number = 7
  console.log(count)
  return (
    <div style={{ height: '50rem', padding: '20rem' }}>
      <h2>{}</h2>
      <button
        disabled
        style={{ height: '5rem', padding: '2rem', margin: '1rem' }}
        // onClick={() => dispatch(increment(number))}
      >
        add
      </button>
      <button
        style={{ height: '5rem', padding: '2rem', margin: '1rem' }}
        onClick={() => dispatch(decrement())}
      >
        remove
      </button>
    </div>
  )
}

export default Counter

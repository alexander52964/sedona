import React, { useEffect, useState } from 'react'
import './TicTacToe.css'
let pictures = [0]
let i = 0
const TicTacToe = ({ img }) => {
  const [ticTac, setTicTac] = useState(true)
  useEffect(() => {
    pictures = img.hotels.map((el) => el.img)
  }, [])
  const slideRight = () => {
    pictures.push(pictures.shift())
    setTicTac((e) => !e)
  }
  const slideLeft = () => {
    pictures.unshift(pictures.pop())
    setTicTac((e) => !e)
  }

  return (
    <div className="tictac">
      <form>
        <input id="x" type="radio" name="tic" checked={ticTac} />
        <label htmlFor="x">3</label>

        <input id="o" type="radio" name="tic" checked={!ticTac} />
        <label htmlFor="o">0</label>
      </form>
      <ul
        onClick={(e) => {
          if (ticTac) {
            if (!e.target.innerText) {
              e.target.innerText = 'X'
              setTicTac(false)
            }
          }
          if (!ticTac) {
            if (!e.target.innerText) {
              e.target.innerText = 'O'
              setTicTac(true)
            }
          }
        }}
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="slider">
        {pictures[i]}
        <img src={pictures[i]} alt="" />
        <div className="left-arrow arrow" onClick={() => slideRight()}>
          &lt;
        </div>
        <div className="right-arrow arrow" onClick={() => slideLeft()}>
          &gt;
        </div>
      </div>
    </div>
  )
}

export default TicTacToe

import React from 'react'
import { star } from '../constants'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'
import './Card.css'

const Card = ({ props }) => {
  const count = useSelector((state) => state.counter.value)
  const mode = useSelector((state) => state.viewmode.value)
  const dispatch = useDispatch()
  const showItemNTimes = (i) => Array(i).fill('')

  function favoritStatus(array, id) {
    return array.find((card) => card === id)
  }

  const isInFavorits = (array, id) => {
    return array.includes(`&id=${id}`)
  }
  let includes = isInFavorits(count, props.id)
  return (
    <div
      className={`card ${mode.list && 'card_list-mode'} ${
        mode.slideShow && 'card_slideShow-mode'
      } `}
    >
      <div className="card__hotel-img">
        <a href={props.img}>
          {' '}
          <img
            src={props.img}
            alt="hotel 1"
            style={
              mode.slideShow
                ? { height: '35rem', width: '50rem' }
                : { height: '21.2rem', width: '30rem' }
            }
          />
        </a>
      </div>
      <div className="card__discription-wrapper">
        <h3 className="card__hotel-name">{props.name}</h3>

        <p className="card__hotel-type">{props.type}</p>
        <p className="card__hotel-price">От {props.price} ₽</p>

        <button className="card__hotel-more uppercase fontSmalBtn brown">
          подробнее
        </button>
        <button
          className="card__button-favorits uppercase fontSmalBtn blue"
          style={
            includes
              ? { backgroundColor: '#7db54f' }
              : { backgroundColor: '#82b3d3' }
          }
          onClick={(e) => {
            if (e.target.innerText.toLowerCase() === 'в избранное') {
              e.target.innerText = 'в избранном'
              e.target.style.backgroundColor = '#7db54f'
              dispatch(increment({ id: `&id=${props.id}` }))
              e.target.style.backgroundColor = '#7db54f'
            } else {
              e.target.innerText = 'в избранное'
              e.target.style.backgroundColor = '#82b3d3'
              dispatch(decrement({ id: `&id=${props.id}` }))
            }
          }}
        >
          {includes ? 'в избранном' : 'в избранное'}
        </button>

        <div className="card__stars">
          {showItemNTimes(Number(props.stars)).map((_, index) => (
            <img src={star} alt="star" key={index} />
          ))}
        </div>
        <button className="btnLikeNorm gray card__reiting">
          Рейтинг: {props.reiting}
        </button>
      </div>
    </div>
  )
}

export default Card

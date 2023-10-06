import React from 'react'
import './Modal.css'
import { x } from '../constants'

const Modal = () => {
  return (
    <div className="modal-wraper">
      <div className="modal-window">
        <div className="modal-window__search-form">
          <div className="modal-window__header">
            <h2 className="uppercase">Поиск гостиницы в Седоне</h2>
            <div className="close-btn"></div>
          </div>
          <form action="">
            <label htmlFor="">Дата заезда:</label>
            <input type="date" />
            <label htmlFor="">Дата выезда:</label>
            <input type="date" />
            <label htmlFor="">Взрослые:</label>
            <input type="number" />
            <label htmlFor="">Дети:</label>
            <input type="number" />
            <button>Найти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal

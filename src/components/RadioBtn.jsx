import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFormData } from '../store/formSlice'

import './RadioBtn.css'

const obj = { Hotel: false, Motel: false, Apartment: false }

const RadioBtn = ({ loc, reset }) => {
  const [checked, setChecked] = useState({})

  useEffect(() => {
    setChecked({ ...obj, [loc.type]: true })
  }, [JSON.stringify(loc), reset])

  const checkHandler = (e) => {
    let value = e.target.value
    setChecked({ ...obj, [value]: true })
  }

  return (
    <div className="radio-btn-list">
      <h4 className="font_4">Тип жилья:</h4>
      <div className="radio-btn-wraper">
        <input
          tabIndex="0"
          type="radio"
          id="contactChoice1"
          name="type"
          value="Hotel"
          checked={checked['Hotel']}
          onChange={checkHandler}
        />
        <div className="custom-radio-btn"></div>
        <label className="text-blocks" htmlFor="contactChoice1">
          Гостиница
        </label>
      </div>

      <div className="radio-btn-wraper">
        <input
          tabIndex="0"
          type="radio"
          id="contactChoice2"
          name="type"
          value="Motel"
          checked={checked['Motel']}
          onChange={checkHandler}
        />
        <div className="custom-radio-btn"></div>
        <label className="text-blocks" htmlFor="contactChoice2">
          Мотель
        </label>
      </div>

      <div className="radio-btn-wraper">
        <input
          tabIndex="0"
          type="radio"
          id="contactChoice3"
          name="type"
          value="Apartment"
          checked={checked['Apartment']}
          onChange={checkHandler}
        />
        <div className="custom-radio-btn"></div>
        <label className="text-blocks" htmlFor="contactChoice3">
          Апартаменты
        </label>
      </div>
    </div>
  )
}

export default RadioBtn

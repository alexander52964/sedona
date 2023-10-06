import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkbox } from '../constants'
import './Checkbox.css'
import { addFormData } from '../store/formSlice'

const Checkbox = ({ loc, reset }) => {
  // const loc = useSelector((state) => state.form.value)
  const checkboxes = [
    { name: 'pool', title: 'Бассейн' },
    { name: 'parking', title: 'Парковка' },
    { name: 'wifi', title: 'Wi-Fi' },
  ]

  const ob = {
    pool: Object.hasOwn(loc, 'pool'),
    parking: Object.hasOwn(loc, 'parking'),
    wifi: Object.hasOwn(loc, 'wifi'),
  }
  const [checked, setChecked] = useState(ob)
  // dispatch(addFormData({ ...getKeysFromObject({ ...checked }) }))

  useEffect(() => {
    setChecked({ ...ob })
  }, [JSON.stringify(loc), reset])

  const handlerChecked = (event) => {
    const name = event.target.name
    checked[name] = checked[name] ? false : true
    setChecked({ ...checked })
  }
  return (
    <div className="infra-checkbox">
      <h4 className="font_4"> Инфраструктура:</h4>

      <ul className="infra-checkbox__list">
        {checkboxes.map((item, index) => (
          <li className="checkbox-wraper" key={index}>
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              onChange={handlerChecked}
              checked={checked[item.name]}
              // value={item.title}
            />
            <div className="custom-checkbox">
              <img src={checkbox} alt="check" />
            </div>
            <label className="text-blocks" htmlFor={item.name}>
              {item.title}
            </label>
          </li>
        ))}
      </ul>

      {/* <div className="checkbox-wraper">
        <input
          type="checkbox"
          id="pool"
          value="pool"
          onChange={handlerChecked}
          checked={checked}
        />
        <div className="custom-checkbox">
          <img src={checkbox} alt="check" />
        </div>
        <label className="text-blocks" htmlFor="pool">
          Бассейн
        </label>
      </div>

      <div className="checkbox-wraper">
        <input type="checkbox" id="parking" name="parking" />
        <div className="custom-checkbox">
          <img src={checkbox} alt="check" />
        </div>
        <label className="text-blocks" htmlFor="parking">
          Парковка
        </label>
      </div>

      <div className="checkbox-wraper">
        <input type="checkbox" id="wifi" name="wifi" />
        <div className="custom-checkbox">
          <img src={checkbox} alt="check" />
        </div>
        <label className="text-blocks" htmlFor="wifi">
          Wi-Fi
        </label>
      </div> */}
    </div>
  )
}

export default Checkbox

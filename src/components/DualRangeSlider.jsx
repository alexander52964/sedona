import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFormData } from '../store/formSlice'
import './DualRangeSlider.css'
let minPrice = 0
let maxPrice = 15000

const DualRangeSlider = ({ loc, reset }) => {
  const [minVal, setMinVal] = useState(minPrice)
  const [maxVal, setMaxVal] = useState(maxPrice)
  const [minChange, setMinChange] = useState(true)
  const [maxChange, setMaxChange] = useState(true)
  // const minVal = useSelector((state) => state.form.value.price_gte)
  // const maxVal = useSelector((state) => state.form.value.price_lte)
  // const dispatch = useDispatch()

  useEffect(() => {
    setMinVal(Number(loc.price_gte))
    setMaxVal(Number(loc.price_lte))
  }, [JSON.stringify(loc), reset])

  const minHandler = () => {
    setMinChange((prev) => !prev)
  }
  const maxHandler = () => {
    setMaxChange((prev) => !prev)
  }

  return (
    <div className="price-slider">
      <h4 className="font_4">Стоимость, ₽:</h4>
      <div className="price-slider__num-inputs-wraper">
        <div className="range-slider__num-input text-blocks">
          <input
            className="text-blocks"
            type="number"
            name="price_gte"
            // value={Number(minVal) < Number(maxVal) ? minVal : maxVal - 1}

            value={minVal}
            // placeholder="0"
            onChange={(e) => {
              // setMinVal(e.target.value)
              // minVal = e.target.value
              setMinVal(
                e.target.value < Number(maxVal)
                  ? e.target.value
                  : Number(minVal)
              )
            }}
            // dispatch(addFormData({ price_gte: e.target.value }))

            //   onFocus={() => {
            //     // minValRef.current = minVal
            //     setMinVal()
            //   }}
            //  onA
            //   onBlur={() => {
            //     setMinVal(0)
            //     console.log(minVal)
            //   }}
          />
        </div>
        <div className="range-slider__num-input text-blocks">
          <input
            className="text-blocks"
            type="number"
            name="price_lte"
            // value={Number(maxVal) < maxPrice ? Number(maxVal) : maxPrice}
            value={Number(maxVal)}
            onChange={(e) => {
              setMaxVal(
                e.target.value <= maxPrice ? e.target.value : Number(maxVal)
              )
              // dispatch(addFormData({ price_lte: e.target.value }))
            }}
            // onFocus={() => {
            //   maxHandler()
            // }}
            // onBlur={maxHandler}
          />
        </div>
      </div>
      <div className="range-slider__ranges">
        <div className="slider__track"></div>
        <div
          className="slider__range"
          style={{
            left: `${
              // ((minChange ? minVal : minPrice) * 100) / (maxPrice - minPrice)
              (Number(minVal) * 100) / (maxPrice - minPrice)
            }%`,
            right: `${100 - (Number(maxVal) * 100) / (maxPrice - minPrice)}%`,
          }}
        ></div>
        <input
          className="range-left"
          type="range"
          // min={-1}
          max={maxPrice}
          // name="price"
          id="minVal"
          step={1}
          value={Number(minVal)}
          // value={minChange && Number(minVal) ? Number(minVal) : minPrice}
          onChange={(e) => {
            setMinVal(
              e.target.value < Number(maxVal) ? e.target.value : Number(minVal)
            )
            // dispatch(addFormData({ price_gte: e.target.value }))
          }}
        />
        <input
          className="range-right"
          type="range"
          // min={-1}
          max={maxPrice}
          // name="price"
          id="maxVal"
          value={Number(maxVal)}
          step={1}
          onChange={(e) => {
            setMaxVal(
              e.target.value > Number(minVal) ? e.target.value : Number(maxVal)
            )
            // dispatch(addFormData({ price_lte: e.target.value }))
          }}
        />
      </div>
    </div>
  )
}

export default DualRangeSlider

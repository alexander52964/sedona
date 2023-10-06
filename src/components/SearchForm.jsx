import { useEffect, useRef } from 'react'
import DualRangeSlider from './DualRangeSlider'
import { useDispatch, useSelector } from 'react-redux'
import { addFormData, resetFormData } from '../store/formSlice'

import './SearchForm.css'
import Checkbox from './Checkbox'
import RadioBtn from './RadioBtn'
import { useState } from 'react'
import {
  Form,
  useFormAction,
  useSubmit,
  useSearchParams,
  useLoaderData,
} from 'react-router-dom'
// import { loader, getFormParams } from '../components/SearchHotels'

const SearchForm = ({ searchParams, setSearchParams, visible }) => {
  // const loc = useSelector((state) => state.form.value)
  const dispatch = useDispatch()
  let loc = Object.fromEntries(searchParams)
  const [reset, setReset] = useState(true)
  // useEffect(() => {
  // dispatch(addFormData(Object.fromEntries(searchParams)))
  // }, [JSON.stringify(loc), searchParams.toString()])

  return (
    <>
      {/* <span>{data}</span> */}
      <Form
        // method="post"
        id="hotFilter"
        className={`hotels-filter ${visible ? 'visible' : 'hidden'}`}
        name="search-form"
        action="/hotels-search"
      >
        {/* <input type="hidden" name="_sort" value="price" />
        <input type="hidden" name="_order" value="asc" /> */}
        <Checkbox loc={loc} reset={reset} />
        <RadioBtn loc={loc} reset={reset} />

        <DualRangeSlider className={'dual'} loc={loc} reset={reset} />
        <div className="form-buttons">
          <button className="button fontSmalBtn uppercase">Применить</button>
          <button
            type="reset"
            onClick={() => {
              setSearchParams({ price_gte: 0, price_lte: 15000 })
              setReset((prev) => !prev)

              // dispatch(resetFormData())
            }}
            className="button fontSmalBtn uppercase"
          >
            Сбросить
          </button>
        </div>
      </Form>
      {/* <form
        id="hotFilter"
        className="hotels-filter"
        // onSubmit={handleFormSubmit}
        // onChange={(e) => console.log(e.target.value)}
        // }}
        // target="cardsFrame"
        // action="http://localhost:5173"
        // method="GET"
      ></form> */}
    </>
  )
}

export default SearchForm

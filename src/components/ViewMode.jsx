import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../store/viewmodeSlice'
import { table, list, slideShow } from '../constants'
import './ViewMode.css'
const radioBattons = { table: false, list: false, slideShow: false }
const ViewMode = () => {
  const mode = useSelector((state) => state.viewmode.value)
  const dispatch = useDispatch()

  return (
    <div className="catalog__sorting-display-metod">
      <input
        type="radio"
        id="table"
        name="sort"
        onChange={(e) =>
          dispatch(changeMode({ ...radioBattons, table: e.target.checked }))
        }
        checked={mode.table}
      />
      <label htmlFor="table">
        <img src={table} alt="table" />
      </label>

      <input
        type="radio"
        id="slideShow"
        name="sort"
        onChange={(e) =>
          dispatch(changeMode({ ...radioBattons, slideShow: e.target.checked }))
        }
        checked={mode.slideShow}
      />
      <label htmlFor="slideShow">
        <img src={slideShow} alt="slideShow" />{' '}
      </label>

      <input
        type="radio"
        id="list"
        name="sort"
        onChange={(e) =>
          dispatch(changeMode({ ...radioBattons, list: e.target.checked }))
        }
        checked={mode.list}
      />
      <label htmlFor="list">
        <img src={list} alt="list" />
      </label>
    </div>
  )
}

export default ViewMode

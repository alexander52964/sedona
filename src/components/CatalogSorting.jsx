import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortData } from '../store/sortSlice'
import './CatalogSorting.css'

import ViewMode from './ViewMode'

const CatalogSorting = ({ hotels }) => {
  const sortData = useSelector((state) => state.sort.value)
  const dispatch = useDispatch()

  return (
    <div className="catalog__sorting">
      <h2>Найдено гостиниц: {hotels.length}</h2>
      <div className="catalog__sorting-wraper">
        <select
          onChange={(e) => {
            dispatch(setSortData({ option: e.target.value }))
          }}
          value={sortData}
        >
          <option value="_sort=price&_order=asc">Сначала дешевые</option>
          <option value="_sort=price&_order=desc">Сначала дорогие</option>
          <option value="_sort=reiting&_order=desc">Сначала популярные</option>
        </select>
        <ViewMode />
      </div>
    </div>
  )
}

export default CatalogSorting

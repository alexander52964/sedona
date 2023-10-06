import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from '../store/viewmodeSlice'
import './Catalog.css'

import Pagination from './Pagination'
import { slideShow } from '../assets'
let p = 4
const Catalog = ({ hotels }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const mode = useSelector((state) => state.viewmode.value)

  useEffect(() => {
    setCurrentPage(1)
  }, [hotels.length])

  return (
    <>
      <div
        className={`catalog__card-list ${mode.table && 'table_mode'} ${
          mode.slideShow && 'slideShow_mode'
        }
         ${mode.list && 'list_mode'}`}
      >
        {
          /*hotelsAfterSort(hotelList, sortBy)*/
          hotels.slice((currentPage - 1) * p, currentPage * p).map((el) => (
            <Card props={el} key={el.id} />
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={hotels.length}
        pageSize={p}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}

export default Catalog

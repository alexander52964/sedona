import React, { useEffect } from 'react'
import { usePagination, DOTS } from '../Hooks/usePagination'
import './Pagination.css'

const Pagination = (props) => {
  const {
    setSearchParams,
    searchParams,
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  // let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className="pagination">
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination__dots">&#8230;</li>
        }

        return (
          <li
            className={
              pageNumber === currentPage
                ? 'desable pagination__item'
                : 'pagination__item'
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
    </ul>
  )
}
export default Pagination

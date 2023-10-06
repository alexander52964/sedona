import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import SearchForm from './SearchForm'
import { addUrl } from '../store/urlSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setSortData } from '../store/sortSlice'

import Catalog from './Catalog'
import { useLoaderData, useSearchParams, useLocation } from 'react-router-dom'
import {
  filterBack,
  table,
  list,
  slideShow,
  hotel_1,
  hotel_2,
  hotel_3,
  hotel_4,
  breadCrumbHous,
  breadCrumbRightArrow,
} from '../constants'

import './SearchHotels.css'
import CatalogSorting from './CatalogSorting'

const fetchData = async () => {
  const data = await fetch(request)
  const json = await data.json()
  return json
}

const SearchHotels = () => {
  const [visible, setVisible] = useState(false)
  const url = useSelector((state) => state.url.value)

  let [searchParams, setSearchParams] = useSearchParams(url)
  let hotels = useLoaderData()

  // useEffect(() => {
  //   setSearchParams(Object.fromEntries(searchParams))
  // }, [])

  return (
    <main className="main-search">
      <div
        className="filter-header"
        style={{ background: `center url('${filterBack}') no-repeat` }}
      >
        <h1>Гостиницы Седоны</h1>
        <div className="breadcrums">
          <a href="#">
            <img src={breadCrumbHous} alt="" />
          </a>
          <img src={breadCrumbRightArrow} alt="" />
          <a href="#" className="btnLikeNorm">
            Гостиницы
          </a>
        </div>
        <div
          className="filter-acardion"
          onClick={() => setVisible((prev) => !prev)}
        >
          <h3>Фильтр</h3>
        </div>

        <SearchForm
          visible={visible}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
      <div className="catalog">
        <CatalogSorting
          setSearchParams={setSearchParams}
          hotels={hotels}
          searchParams={searchParams}
        />
        <Catalog hotels={hotels} />
      </div>
    </main>
  )
}

export default SearchHotels

import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import MainPage from './UI/MainPage'
import Modal from './components/Modal'
import TicTacToe from './tic-tac-toe/TicTacToe'
import SearchHotels from './components/SearchHotels'

import MainLayouts from './Layouts/MainLayouts'
// import Modal from './components/Modal'
import './App.css'
import {
  backgroundSedona,
  hotel_1,
  hotel_2,
  hotel_3,
  hotel_4,
  decor,
  cardData,
} from './constants'

//     {/* <Header data={data} /> */}
//     {/* <Subscribe /> */}
//     {/* <Footer /> */}
//     {/* <TicTacToe img={cardData} /> */}
//     {/* <Modal /> */}
//   </>

// const actionForm = async ({ request }) => {
//   let url = new URL(request.url)
//   let param = Object.fromEntries(url.searchParams)

//   return param
// }

function App() {
  const sortData = useSelector((state) => state.sort.value)
  const loader = async ({ request }) => {
    let url = new URL(request.url)

    const resolve = await fetch(
      // `http://localhost:3001/hotels${url.search}`)
      `https://gentle-erin-nematode.cyclic.app/hotels${
        url.search ? url.search + '&' : '?'
      }${sortData}`
    )
    const json = await resolve.json()

    return json
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<MainPage />} />
        <Route
          path="hotels-search"
          // action={actionForm}
          loader={loader}
          element={<SearchHotels />}
        />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

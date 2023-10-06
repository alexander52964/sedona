import React from 'react'
import Button from '../UI/Button'
import './Header.css'
import { search, heart, logo, nav } from '../constants/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Header = () => {
  const count = useSelector((state) => state.counter.value)
  console.log(count)
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          {nav.map((el) => (
            <li key={el.id} className="nav-list__item">
              <Link to={el.ref} className="nav-list__link font_4 text-nowrap">
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="user-menu">
        <div className="user-menu__search">
          <img src={search} alt="search" />
        </div>

        <div className="user-menu__favorites">
          <img src={heart} alt="fovorites" />

          <Link
            to={`hotels-search?price_gte=0&price_lte=15000${count.join('')}`}
          >
            <div
              className="user-menu__counter"
              style={
                count.length === 0
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }
            >
              {<span>{count.length}</span>}
            </div>
          </Link>
        </div>

        <button className="button fontSmalBtn brown">Хочу сюда!</button>
      </div>
    </header>
  )
}

export default Header

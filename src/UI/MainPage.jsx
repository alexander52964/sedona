import React, { lazy } from 'react'
import Section from './Section'
import Advcard from './Advcard'
import Counter from '../store/Counter'
import './MainPage.css'
import {
  advantages,
  sections,
  services,
  decor,
  backgroundSedona,
  sedona,
  welcome,
  gourgies,
} from '../constants'

const MainPage = () => {
  return (
    <main className="main-sedona">
      <div
        className="welcome-sedona"
        style={{
          background: `url('${backgroundSedona}')`,
        }}
      >
        <ul className="welcome-sign">
          <li>
            <img src={welcome} alt="welcome" />
          </li>
          <li>
            <img src={gourgies} alt="welcome" />
          </li>
          <li>
            <img src={sedona} alt="welcome" />
          </li>
        </ul>
        <div
          className="welcome-sedona__decor"
          style={{ background: `bottom url('${decor}')` }}
        ></div>
      </div>

      {/* grid conteiner */}
      <div className="grid-container">
        {/* section about */}
        <section className="about-sedona ">
          <Section props={sections[0]} />
        </section>

        {/* card real town  and img*/}
        <div className="title-card card_bg-bl-82 card_col-wh-df">
          <Advcard props={advantages[0]}>
            <hr />
          </Advcard>
        </div>
        <div
          className="sedona-townImg"
          style={{ background: `center url('${advantages[0].img}') no-repeat` }}
        ></div>

        {/* 3 advantages cards */}
        <div className="title-card">
          <Advcard props={advantages[1]}>
            <hr />
          </Advcard>
        </div>
        <div className="title-card">
          <Advcard props={advantages[2]}>
            <hr />
          </Advcard>
        </div>
        <div className="title-card">
          <Advcard props={advantages[3]}>
            <hr />
          </Advcard>
        </div>

        {/* canieon img and bridge card */}
        <div
          className="sedona-canionImg"
          style={{ background: `center url('${advantages[4].img}') no-repeat` }}
        ></div>
        <div className="title-card card_bg-bl-82 card_col-wh-df">
          <Advcard props={advantages[4]}>
            <hr />
          </Advcard>
        </div>

        {/* visit sedona */}
        <section className="visti-sedona">
          <Section props={sections[1]} />
        </section>

        {/* 3 cards: home, food suvenires */}
        <div className="title-card">
          <Advcard props={services[0]}>
            <img src={services[0].icon} alt="" />
          </Advcard>
        </div>
        <div className="title-card">
          <Advcard props={services[1]}>
            <img src={services[1].icon} alt="" />
          </Advcard>
        </div>
        <div className="title-card">
          <Advcard props={services[2]}>
            <img src={services[2].icon} alt="" />
          </Advcard>
        </div>

        {/*hotels search */}
        <section className="hotels-search">
          <Section props={sections[2]}>
            <button className="font_4">ПОИСК ГОСТИНИЦЫ В седоне</button>
          </Section>
        </section>

        {/*subscribe*/}
      </div>
    </main>
  )
}

export default MainPage

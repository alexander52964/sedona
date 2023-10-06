import React from 'react'
import Section from '../UI/Section'
import { sections } from '../constants'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <section
      className="subscribe"
      style={{
        background: `center url('${sections[3].background}') no-repeat`,
      }}
    >
      <Section props={sections[3]}>
        <form className="flex-center subscribe__email-input">
          <input
            className="text-blocks"
            type="email"
            placeholder="Ваш e-mail"
          />
          <button className="font_4">Подписаться</button>
        </form>
      </Section>
    </section>
  )
}

export default Subscribe

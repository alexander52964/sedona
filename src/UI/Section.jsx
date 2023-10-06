import React from 'react'

const Section = ({ props, children }) => {
  return (
    <>
      <h2 className="uppercase">{props.title}</h2>
      <p>{props.text}</p>
      {children}
    </>
  )
}

export default Section

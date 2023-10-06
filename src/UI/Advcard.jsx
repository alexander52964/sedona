import React from 'react'

const Advcard = ({ props, children }) => {
  return (
    <>
      <h3 className="uppercase">{props.title}</h3>
      {children}
      <p className="text-blocks">{props.text}</p>
    </>
  )
}

export default Advcard

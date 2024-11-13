import React from 'react'

function Digit({numero}) {
  return (
    <div className="col-1 bg-dark text-light display-1 pt-2 pb-2 m-2 rounded border">{numero}</div>
  )
}

export default Digit
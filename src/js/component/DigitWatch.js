import React from 'react'

function DigitWatch({url}) {
  return (
    <div className="col-1 bg-dark text-light display-1 p-1 pb-4 m-2 rounded border">
        <img src={url} alt="Watch" className="img-fluid w-100"></img>
    </div>
  )
}

export default DigitWatch
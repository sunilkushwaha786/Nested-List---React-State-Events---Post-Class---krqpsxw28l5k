import React from 'react'

const Town = (name, index) => {
  return (
    <li>
      <h5 id={'town'+(index+1)}>{name}</h5>
    </li>
  )
}

export default Town
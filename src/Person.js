import React from 'react'

export default props => {
  return (
    <div>
      <input type="text" onChange={e => props.nameChangeHandler(e)} />
    </div>
  )
}

import React from 'react'

export default props => {
  const { name, age } = props
  return (
    <div>
      <p>
        I am {name} and I am {age} old.
      </p>
    </div>
  )
}

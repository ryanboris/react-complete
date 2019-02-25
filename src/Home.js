import React from 'react'
import { Route, Link } from 'react-router-dom'

export default function Home() {
  return (
    <Route>
      <p>
        <Link to="/persons/max">Max</Link>
      </p>
      <p>
        <Link to="/persons/jon">Jon</Link>
      </p>
      <p>
        <Link to="/persons/ted">Ted</Link>
      </p>
    </Route>
  )
}

import React from 'react'

export const MovieList = (props) => {
  return (
    <section>
      <aside className="menu">
        <p className="menu-label">
          影城列表
        </p>
        <ul className="menu-list">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Customers</a></li>
        </ul>
      </aside>
    </section>
  )
}

export default MovieList




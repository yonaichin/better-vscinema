import React from 'react'
import _ from 'lodash'

export const TheaterList = (props) => {
  let theaters = null
  if (!_.isEmpty(props.dataset)) {
    theaters = _.map(props.dataset, (d, idx) => {
      return (
        <li key={idx}><a href="#">{d.text}</a></li>
      )
    })
  }
  return (
    <section>
      <aside className="menu">
        <p className="menu-label">
          影城列表
        </p>
        <ul className="menu-list">
          { theaters }
        </ul>
      </aside>
    </section>
  )
}

export default TheaterList




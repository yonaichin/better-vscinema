import React from 'react'
import _ from 'lodash'

export const TheaterList = (props) => {
  let theaters = null
  if (!_.isEmpty(props.dataset)) {
    theaters = _.map(props.dataset, (d, idx) => {
      return (
        <div className="box" key={idx}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64 is-square">
                <img src={d.thumbnail} alt="Image"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{d.text}</strong>
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <a className="level-item" href={`https://www.google.com.tw/maps/place/${d.address}`}>
                    <span className="icon"><i className="fa fa-map-marker"></i></span>
                  </a>
                  <a className="level-item" href={`tel:${d.tel.replace(/-|\(|\)| /g, '')}`}>
                    <span className="icon"><i className="fa fa-phone"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      )
    })
  }
  return (
    <section>
      <aside className="menu">
        <p className="menu-label">
          影城列表
        </p>
        <ul className="container">
          { theaters }
        </ul>
      </aside>
    </section>
  )
}

export default TheaterList




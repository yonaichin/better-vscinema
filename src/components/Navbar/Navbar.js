import React from 'react'

export const Navbar = (props) => {
  return (
    <nav className="nav">
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-left">
        <a className="nav-item is-brand" href="/">
          Better VSCinema
        </a>
      </div>

      <div className="nav-center">
        <a className="nav-item" href="https://github.com/yonaichin/better-vscinema" target='_blank'>
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" >
          <span className="icon">
            <i className="fa fa-home"></i>
          </span>
        </a>
      </div>


    </nav>
  )
}

export default Navbar

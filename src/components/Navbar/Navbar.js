import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './Navbar.css'
import _ from 'lodash'

class Navbar extends Component {
  render () {
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
          {
            _.isEmpty(this.props.auth)
            ? <FacebookLoginNavItem {...this.props}/>
            : <UserInfo {...this.props}/>
          }


        </div>


      </nav>
    )
  }
}
const UserInfo = ({ auth }) => {
  return (
    <a className="nav-item">
      <span className="avatar">
        <img className="image is-24x24 avatar-icon" src={_.get(auth, 'picture.data.url', 'http://placehold.it/24x24')} role="presentation" />
      </span> { auth.name }
    </a>
  )
}

const FacebookLoginNavItem = ({ setAuth }) => {
  return (
    <a className="nav-item">
      <span className="icon">
        <i className="fa fa-facebook-square"></i>
      </span>
      <FacebookLogin
        appId="1044197802373443"
        autoLoad={true}
        fields="name,email,picture"
        callback={(res) => setAuth(res)}
        cssClass="facebook_btn"
        textButton="登入"
        language="zh_TW"
        data-auto-logout-link="false"
      />
    </a>
  )
}

export default Navbar

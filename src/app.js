import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheaterList from './components/TheaterList'
import LoadingSpinner from './components/LoadingSpinner'

import { setView } from './redux/modules/view'
import { setAuth } from './redux/modules/auth'
import { actions as TheaterActions } from './redux/modules/theater'

class App extends Component {
  componentDidMount() {
    this.props.getTheaters()
  }
  render() {
    return (
      <div>
        <Navbar auth={this.props.auth} setAuth={this.props.setAuth}/>
        <Hero />
        <div className="is-hidden-mobile">
          <article className="message">
            <div className="message-header">
             公告 PROCLAMATION
            </div>
            <div className="message-body">
              <p>此網站的初衷是要打造在行動裝置上更好的威秀影城體驗，因此目前尚未支援電腦版。</p>
              <p>若需要使用電腦版可透過此<a href="https://www.vscinemas.com.tw/" >連結</a>。</p>
              <br />
              <p>Thrived to improve experience on mobile devices, this site is yet desktop-ready.</p>
              <p>You can visit Vieshow website via this <a href="https://www.vscinemas.com.tw/" >link</a>.</p>
            </div>
          </article>
        </div>
        <div className="is-hidden-tablet">
          {
            // show LoadingSpinner when requesting data
            this.props.theater.isFetching && <LoadingSpinner />
          }
          {/*
          <section>
            <h4>Current Page is : {this.props.view}</h4>
            <a className="button is-primary is-outlined" onClick={() => { this.props.setView('INDEX')}}>Index</a>
            <a className="button is-info is-outlined" onClick={() => { this.props.setView('TICKET')}}>Ticket</a>
          </section>
          */}
          <TheaterList dataset={this.props.theater.data} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  view: state.view,
  theater: state.theater,
  auth: state.auth
})

export default connect(mapStateToProps, {
  setView,
  setAuth,
  ...TheaterActions
})(App)

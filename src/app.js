import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieList from './components/MovieList'

import { setView } from './redux/modules/view'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <section>
          <h4>Current Page is : {this.props.view}</h4>
          <a className="button is-primary is-outlined" onClick={() => { this.props.setView('INDEX')}}>Index</a>
          <a className="button is-info is-outlined" onClick={() => { this.props.setView('TICKET')}}>Ticket</a>
        </section>
        <MovieList />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  view: state.view
})

export default connect(mapStateToProps, {
  setView
})(App)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheaterList from './components/TheaterList'
import LoadingSpinner from './components/LoadingSpinner'

import { setView } from './redux/modules/view'
import { actions as TheaterActions } from './redux/modules/theater'

class App extends Component {
  componentDidMount() {
    this.props.getTheaters()
  }
  render() {
    return (
      <div>
        <Navbar />
        {
          // show LoadingSpinner when requesting data
          this.props.theater.isFetching && <LoadingSpinner />
        }
        <Hero />
        <section>
          <h4>Current Page is : {this.props.view}</h4>
          <a className="button is-primary is-outlined" onClick={() => { this.props.setView('INDEX')}}>Index</a>
          <a className="button is-info is-outlined" onClick={() => { this.props.setView('TICKET')}}>Ticket</a>
        </section>
        <TheaterList dataset={this.props.theater.data} />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  view: state.view,
  theater: state.theater
})

export default connect(mapStateToProps, {
  setView,
  ...TheaterActions
})(App)

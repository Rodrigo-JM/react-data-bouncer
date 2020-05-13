import React, { Component } from 'react'
import ChildComp from './ChildComp'
import Bouncer from 'react-data-bouncer'

let dummyuser = {
  id: 1,
  name: 'Jeff',
  age: 17,
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }

    this.setUser = this.setUser.bind(this)
  }

  componentDidMount() {
    this.setState({user: dummyuser})
  }


  setUser(){
    this.setState({
      user: dummyuser
    })
  }

  render() {
    return (
      <div>
        <Bouncer setUser={this.setUser} >
          <ChildComp user={this.state.user}/>
        </Bouncer>
      </div>
    )
  }
}


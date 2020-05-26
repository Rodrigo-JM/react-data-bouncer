import React, { Component } from 'react'
import ChildComp from './ChildComp'
import Bouncer from 'react-data-bouncer'

let theUser = {
  id: 1,
  name: 'Jeff',
  age: 17,
  purchases: []
}

let purchases = ['1', '2']

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }

    this.setUser = this.setUser.bind(this)
  }

  setUser(dummyuser, purchases){
    dummyuser.purchases = purchases

    this.setState({
      user: dummyuser
    })
  }

  render() {
    return (
      <div>
        <Bouncer setUser={this.setUser} setUserArgs={[theUser, purchases]}>
          <ChildComp user={this.state.user}/>
        </Bouncer>
      </div>
    )
  }
}


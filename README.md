# react-data-bouncer

> Component for controlling the flow of props from parent to child components

[![NPM](https://img.shields.io/npm/v/react-data-bouncer.svg)](https://www.npmjs.com/package/react-data-bouncer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-data-bouncer
```

## Usage

Bouncer's purpose is to make sure you have your desired state/props on your parent component before rendering any children.

Best uses cases are: 

 - When you want to use a prop that belongs to the parent in the children's ComponentDidMount.

 - When you want to call a function before the rendering of the children.

 - Very good use case when using React-Redux and wanting the children to have access to an updated store before rendering.

Steps: 

 - Wrap the components you want to control the rendering 

 - Pass functions as props

 - Pass arguments as an array (the name of the prop should be "function name" + "Args")

```jsx
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
      //Pass functions you want to be called before Bouncer's children get rendered/mounted
      //If you want your function to be called with arguments, pass an array with the arguments as "function name" + "Args" 
        <Bouncer setUser={this.setUser} setUserArgs={[theUser, purchases]}>
          <ChildComp user={this.state.user}/>
        </Bouncer>
      </div>
    )
  }
}

```

## License

MIT © [Rodrigo-JM](https://github.com/Rodrigo-JM)

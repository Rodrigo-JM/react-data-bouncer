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


```jsx
import React, { Component } from 'react'

import Bouncer from 'react-data-bouncer'

class Example extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }

    this.setUser = this.setUser.bind(this)
  }

  setUser(){
    this.setState({
      user: dummyuser
    })
  }

  render() {
    return (
      <div>
        //Pass functions you want to be called before Bouncer's children get rendered/mounted
        <Bouncer setUser={this.setUser} >

          //ChildComp will only render after setUser function gets called
          <ChildComp user={this.state.user}/>
        </Bouncer>
      </div>
    )
  }
}
```

## Next Steps

 - Allowing arguments to be passed down

## License

MIT © [Rodrigo-JM](https://github.com/Rodrigo-JM)

import React from 'react'

export default class Bouncer extends React.Component {
  constructor() {
    super()
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    Object.keys(this.props).map((prop) => {
      console.log(prop)
      if (typeof this.props[prop] === 'function') {
        this.props[prop]()
      }
    })

    this.setState({
      mounted: true
    })
  }

  render() {
    return this.state.mounted && this.props.children
  }
}

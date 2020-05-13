import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor() {
        super() 

        this.state = {
            toy: {
                owner: {}
            },
        }
    }

    componentDidMount() {
        let newState = {...this.state}

        //i want user to be jeff already
        newState.toy.owner = this.props.user
        console.log(this.props.user, 'props inside mount should contain user')

        this.setState(newState)
    }

    render() {
        console.log(this.state)
        return (
            <div>
             {
                 this.props.user.name || 'Rodrigo'
             }
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class MoodTracker extends Component {
    // PRE-REACT v16
    // what should happen when the component is first created
    // constructor() {
    //     // calls the parent class' constructor
    //     super()
    //     this.state = {
    //         // info goes here
    //     }
    // }

    // POST-REACT v16
    state = {
        moodPoints: 5 // creates key/value pair in this.state
    }
    increaseMood = () => {
        this.setState((prevState, props) => {
            return {
                moodPoints: prevState.moodPoints + 1
            }
        })
    }

    decreaseMood = () => {
        this.setState((prevState, props) => {
            return {
                moodPoints: prevState.moodPoints -1
            }
        })
    }

    handleSetToTen = () => {
        // when setting a value not dependent on prev state, we don't need preState
        this.setState({
            moodPoints: 10
        })
    }

    // in order to change state, we must use the setState() method.
    // there are multiple ways to utilize setState, we will be using a callback function.

    render() {



        return (
        <div>
            <p>On a scale of 1-10</p>
            <p>You are this happy: {this.state.moodPoints}</p>
            <button onClick={this.increaseMood}>Cheer up!</button>
            <button onClick={this.decreaseMood}>Cheer down...</button>
            <button onClick={this.handleSetToTen}>Max Happiness</button>
        </div>
        )
    }
}


import React, { Component } from 'react'
import About from './About'
import Coordinator from './Coordinator'
import When from './When'

export class Event extends Component {
    render() {
        return (
            <>
                <div className='Event'>
                    <About />
                </div>
                <div className='Event'>
                    <Coordinator />
                </div>
                <div className='Event'>
                    <When />
                </div>
                <button onClick={this.handleClick}>PUBLISH EVENT</button>
            </>
        )
    }
}

export default Event

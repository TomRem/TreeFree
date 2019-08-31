import React, { Component } from 'react'
import FormTitle from './FormTitle'
import Grid from './Grid'

class When extends Component {
    state = {
        checked: false,
    }
    chooseCheckbox = () => {

    }

    render() {
        return (
            <div>
                <FormTitle text={'When'} />
                <Grid
                    leftContent={<div>starts on <span style={{ color: 'pink' }}> *</span></div>}
                    centerContent={
                        <div>
                            <input id="date" name='startsOn' onChange={this.props.handleChange} type="date"></input><span className='letters'>at</span>
                            <input type="time" name="usr_time"></input>
                            <input type="checkbox" name='am' onChange={this.chooseCheckbox} /><span className='letters'>AM</span>
                            <input type="checkbox" name='pm' onChange={this.chooseCheckbox} /><span className='letters'>PM</span>
                        </div>}
                    rightContent={null}
                />
                <Grid
                    leftContent={'duration'}
                    centerContent={
                        <>
                            <input type="number" onChange={this.props.handleChange} name="duration" min="10" max="100" placeholder='Number'></input><span className='letters'>hour</span>
                        </>}
                    rightContent={null}
                />
            </div >
        )
    }
}

export default When

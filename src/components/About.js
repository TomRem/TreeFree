import React, { Component } from 'react'
import FormTitle from './FormTitle'
import Grid from './Grid'
import WarningMessage from './WarningMessage'
import data from '../mocks/categories.json'

class About extends Component {
    state = {
        checked: 'first',
    }

    chooseCheckbox = (e) => {
        if (e.target.name === 'second') {
            this.setState({
                checked: 'second'
            })
        } else {
            this.setState({
                checked: 'first'
            })
        }
    }
    
    render() {
        let hidden;
        if(this.state.checked === 'first'){
            hidden = {visibility: 'hidden'}
        } else {
            hidden = {visibility: 'visible'}
        }
        return (
            <div>
                <FormTitle text={'About'} />
                <Grid
                    leftContent={<div>title <span style={{ color: 'pink' }}> *</span></div>}
                    centerContent={
                        <input className='titleInput' placeholder="Make it short and clear"></input>
                    }
                    rightContent={<WarningMessage text={'Title cannot by empty'} />}
                />
                <Grid
                    leftContent={<div>description <span style={{ color: 'pink' }}> *</span></div>}
                    centerContent={<textarea className='descriptionTextarea' placeholder="Write about your event, be creative"></textarea>}
                    rightContent={<WarningMessage text={'Description cannot by empty'} />}
                />
                <Grid
                    leftContent={'category'}
                    centerContent={
                        <div className='customSelect'>
                            <select className = 'categorySelect' required>
                                <option value="" disabled selected hidden>Select category (skills, interests, locations)</option>
                                {data.map((name) => <option key={name.id} value={name.id}>{name.name}</option>)}
                            </select>
                        </div>}
                    rightContent={null}
                />
                <Grid
                    leftContent={'payment'}
                    centerContent={
                        <div>
                            <input type="checkbox" name='first' onChange={this.chooseCheckbox} checked={this.state.checked === 'first'} /><span className='letters'>Free event</span>
                            <input type="checkbox" name='second' onChange={this.chooseCheckbox} checked={this.state.checked === 'second'} /><span className='letters'>Paid event</span>
                            <span style={hidden}><input className='feeNumber' type="number" placeholder="Fee" /><span className='letters'>$</span></span>
                        </div>}
                    rightContent={null}
                />
                <Grid
                    leftContent={'reward'}
                    centerContent={
                        <>
                            <input className='feeNumber' type="number" placeholder="Number"></input><span className='letters'>reward points for attendance </span>
                        </>}
                    rightContent={null}
                />
            </div>
        )
    }
}

export default About

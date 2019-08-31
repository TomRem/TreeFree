import React from 'react'
import FormTitle from './FormTitle'
import Grid from './Grid'
import WarningMessage from './WarningMessage'
import data from '../mocks/categories.json'
import Topic from './Topic'

function About(props) {
    console.log(props.about)
    return (
        <div>
            <FormTitle text={'About'} />
            <Grid
                leftContent={<Topic text={'title'} error={props.about.errorTitle} required={true} />}
                centerContent={
                    <input
                        style={props.about.titleStyle}
                        className='titleInput'
                        placeholder="Make it short and clear"
                        name='title'
                        onChange={props.handleChange}>
                    </input>
                }
                rightContent={<WarningMessage error={props.about.errorTitle} text={'Title cannot by empty'} />}
            />
            <Grid
                leftContent={<Topic text={'description'} error={props.about.errorDescription} required={true} />}
                centerContent={
                    <>
                        <textarea className='descriptionTextarea'
                            style={props.about.descriptionStyle}
                            name='description'
                            onChange={props.handleChange}
                            maxLength="160"
                            placeholder="Write about your event, be creative">
                        </textarea>
                        <div className='grayText' >
                            <span className="alignleft">Max length 160 characters</span>
                            <span className="alignright">{props.about.description.length}/160</span>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </>}
                rightContent={<WarningMessage error={props.about.errorDescription} text={'Description cannot by empty'} />}
            />
            <Grid
                leftContent={'category'}
                centerContent={
                    <div className='customSelect'>
                        <select className='categorySelect' required onChange={props.handleChange} name='category'>
                            <option value="" disabled selected hidden>Select category (skills, interests, locations)</option>
                            {data.map((name) => <option key={name.id} value={name.name}>{name.name}</option>)}
                        </select>
                        <div className='grayText' >Describes topic and people who should be interested in this event</div>
                    </div>}
            />
            <Grid
                leftContent={<Topic text={'payment'} error={props.about.errorPayment} required={false} />}
                centerContent={
                    <div>
                        <input type="checkbox" name='first' onChange={props.chooseCheckbox} checked={props.about.checked === 'first'} /><span className='letters'>Free event</span>
                        <input type="checkbox" name='second' onChange={props.chooseCheckbox} checked={props.about.checked === 'second'} /><span className='letters'>Paid event</span>
                        <span style={props.about.checkboxStyle}><input className='feeNumber' value={props.payment} style={props.about.paymentStyle} type="number" min="0" placeholder="Fee" name='payment' onChange={props.handleChange} /><span className='letters'>$</span></span>
                    </div>}
                rightContent={<WarningMessage error={props.about.errorPayment} text={'Payment cannot be less than one'} />}
            />
            <Grid
                leftContent={<Topic text={'reward'} error={props.about.errorReward} required={false} />}
                centerContent={
                    <>
                        <input className='feeNumber' onChange={props.handleChange} name='reward' min="0" type="number" value={props.reward} style={props.about.rewardStyle} placeholder="Number"></input><span className='letters'>reward points for attendance </span>
                    </>}
                rightContent={<WarningMessage error={props.about.errorReward} text={'Reward cannot be less than one'} />}
            />
        </div>
    )
}

export default About

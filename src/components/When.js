import FormTitle from './FormTitle'
import Grid from './Grid'
import React from 'react'
import WarningMessage from './WarningMessage'
import Topic from './Topic'

function When(props) {
    let error = props.when.errorTime || props.when.errorStartsOn;
    return (
        <div>
            <FormTitle text={'When'} />
            <Grid
                leftContent={<Topic text={'start on'} error={error} required={true} />}
                centerContent={
                    <div>
                        <input style={props.when.startsOnStyle} id="date" name='startsOn' onChange={props.handleChange} type="date"></input><span className='letters'>at</span>
                        <input style={props.when.timeStyle} type="time" name="time" onChange={props.handleChange}></input>
                    </div>}
                rightContent={<WarningMessage error={error} text={'Start on cannot be empty'} />}
            />
            <Grid
                leftContent={<Topic text={'duration'} error={props.when.errorDuration} required={false} />}
                centerContent={
                    <>
                        <input type="number" style={props.when.durationStyle} onChange={props.handleChange} name="duration" min="10" placeholder='Number'></input><span className='letters'>hour</span>
                    </>}
                rightContent={<WarningMessage error={props.when.errorDuration} text={'Duration cannot be less than ten'} />}
            />
        </div >

    )
}

export default When
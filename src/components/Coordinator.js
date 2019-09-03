import React from 'react'
import FormTitle from './FormTitle'
import Grid from './Grid'
import data from '../mocks/employes.json'
import Topic from './Topic'
import WarningMessage from './WarningMessage'

function Coordinator(props) {
    let customResponsible = data.filter(data => data.id === 3);
    return (
        <div>
            <FormTitle text={'Coordinator'} />
            <Grid
                leftContent={<Topic text={'responsible'} error={props.coordinator.errorResponsible} required={true} />}
                centerContent={
                    <div className='customSelect'>
                        <select className='categorySelect' name='responsible' onChange={props.handleChange}>
                            <option disabled>My</option>
                            <option value={customResponsible[0].id}>{customResponsible[0].name} {customResponsible[0].lastname}</option>
                            <option disabled>Others</option>
                            {data.map((name) => <option key={name.id} value={name.id}>{name.name} {name.lastname}</option>)}
                        </select>
                    </div>}
                rightContent={<WarningMessage error={props.coordinator.errorResponsible} text={'You need to choose responsible'} />}
            />
            <Grid
                leftContent={<Topic text={'email'} error={props.coordinator.errorEmail} required={false} />}
                centerContent={<input name='email' onChange={props.handleChange} style={props.coordinator.emailStyle} className='titleInput' placeholder={'Email'} type='email' />}
                rightContent={<WarningMessage error={props.coordinator.errorEmail} text={'Email should have @ and . '} />}
            />
        </div>
    )
}

export default Coordinator

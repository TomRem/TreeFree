import React from 'react'
import FormTitle from './FormTitle'
import Grid from './Grid'
import data from '../mocks/employes.json'

function Coordinator() {
    return (
        <div>
            <FormTitle text={'Coordinator'} />
            <Grid
                leftContent={<div>responsible <span style={{ color: 'pink' }}> *</span></div>}
                centerContent={
                    <div className='customSelect'>
                        <select className='categorySelect'>
                            <option value="Me" disabled>Me</option>
                            <option value="Me - Tomasz Rembisz" disabled selected hidden>Me - Tomasz Rembisz</option>
                            <option value=''>Tomasz Rembisz</option>
                            <option value="Others" disabled>Others</option>
                            {data.map((name) => <option key={name.id} value={name.id}>{name.name} {name.lastname}</option>)}
                        </select>
                    </div>}
                rightContent={null}
            />
            <Grid
                leftContent={'email'}
                centerContent={<input className='titleInput' placeholder={'Email'} type='email' />}
                rightContent={null}
            />
        </div>
    )
}

export default Coordinator

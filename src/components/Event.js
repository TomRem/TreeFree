import React, { Component } from 'react'
import About from './About'
import Coordinator from './Coordinator'
import When from './When'
import { Link } from 'react-router-dom'

export class Event extends Component {
    state = {
        title: '',
        errorTitle: false,
        titleStyle: {},

        description: '',
        errorDescription: false,
        descriptionStyle: {},

        category: '',

        checkboxStyle: { visibility: 'hidden' },
        checked: 'first',
        payment: 0,
        errorPayment: false,
        paymentStyle: {},

        reward: 0,
        errorReward: false,

        startsOn: '',
        duration: 0,

        validation: false
    }

    setValues = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.target.name;
        const ifEmpty = value.length === 0;
        const ifNumberEmpty = value <= 0;
        const style = {
            border: 'solid 2px pink',
            outline: 'none',
        }

        this.setState({
            [name]: value,
        })
        switch (name) {
            case 'title':
                this.setState({
                    errorTitle: ifEmpty,
                    titleStyle: ifEmpty ? style : {},
                })
                break;
            case 'description':
                this.setState({
                    errorDescription: ifEmpty,
                    descriptionStyle: ifEmpty ? style : {},
                })
                break;
            case 'payment':
                if (this.state.checked === 'second' && this.state.payment >= 0) {
                    this.setState({
                        errorPayment: ifNumberEmpty,
                        paymentStyle: ifNumberEmpty ? style : {},
                    })
                }
                break;
            case 'reward':
                if (this.state.reward >= 0) {
                    this.setState({
                        errorReward: ifNumberEmpty,
                        rewardStyle: ifNumberEmpty ? style : {},
                    })
                }
                break;
            case 'duration':
                // if (this.state.duration >= 0) {
                this.setState({
                })
                //}
                break;
            default:
        }
    }

    sendEvent = () => {
        if ((this.state.errorTitle === false && this.state.title !== '') &&
            (this.state.errorDescription === false && this.state.description !== '') &&
            (this.state.checked === 'first' || (this.state.checked === 'second' && this.state.payment > 0))) {
            const eventToSend = {
                title: this.state.title,
                description: this.state.description,
                category: this.state.category,

                paid_event: this.state.checked === 'second' ? true : false, //nowe boolean
                event_fee: this.state.payment,
                reward: this.state.reward,

                coordinator: {
                    email: 'string',
                    id: 'string',
                },

                startsOn: this.state.startsOn, // format: YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
                duration: this.state.duration,// in seconds
            }
            console.log('mozna wysylac wszystko gitarka', eventToSend)

        } else {
            console.log('cos jest nie tak ', this.state)
            const style = {
                border: 'solid 2px pink',
                outline: 'none',
            }

            if (this.state.title === '') {
                this.setState({
                    errorTitle: true,
                    titleStyle: style,
                })
            }
            if (this.state.description === '') {
                this.setState({
                    errorDescription: true,
                    descriptionStyle: style,
                })
            }

            if (this.state.checked === 'second' && this.state.payment <= 0) {
                this.setState({
                    errorPayment: true,
                    paymentStyle: style,
                })
            }
        }
    }


    chooseCheckbox = (e) => {
        if (e.target.name === 'second') {
            this.setState({
                checked: 'second',
                checkboxStyle: { visibility: 'visible' }
            })
        } else {
            this.setState({
                checked: 'first',
                checkboxStyle: { visibility: 'hidden' },
                errorPayment: false,
                payment: 0,
                paymentStyle: {}
            })

        }
    }

    render() {
        const styleLink = {
            borderRadius: '3px',
            backgroundColor: '#FF8B12',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            marginBottom: '40px',
        }
        return (
            <>
                <div className='Event'>
                    <About handleChange={this.setValues} about={this.state} chooseCheckbox={this.chooseCheckbox} />
                </div>
                <div className='Event'>
                    <Coordinator />
                </div>
                <div className='Event'>
                    <When handleChange={this.setValues} />
                </div>
                {((this.state.errorTitle === false && this.state.title !== '') &&
                    (this.state.errorDescription === false && this.state.description !== '') &&
                    (this.state.checked === 'first' || (this.state.checked === 'second' && this.state.payment > 0))) ?
                    <Link style={styleLink} onClick={this.sendEvent} to='/created' >PUBLISH EVENT</Link> :
                    <Link style={styleLink} onClick={this.sendEvent} to='/' >PUBLISH EVENT</Link>}
            </>
        )
    }
}

export default Event

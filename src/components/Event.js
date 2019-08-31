import React, { Component } from 'react'
import About from './About'
import Coordinator from './Coordinator'
import When from './When'
import {Link} from 'react-router-dom'

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
        const eventToSend = {
            title: this.state.title,
            description: this.state.description,
            payment: this.state.payment,
            reward: this.state.reward,
            category: this.state.category,
            startsOn: this.state.startsOn,
            duration: this.state.duration

        }
        console.log(eventToSend)
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
                <Link onClick={this.sendEvent} to='/created'><button >PUBLISH EVENT</button></Link>
            </>
        )
    }
}

export default Event

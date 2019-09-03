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

        category: 0,


        checkboxStyle: { visibility: 'hidden' },
        checked: 'first',
        payment: 0,
        errorPayment: false,
        paymentStyle: {},

        reward: 0,
        errorReward: false,

        responsible: '3',
        errorResponsible: false,
        email: '',
        errorEmail: false,
        emailStyle: {},

        startsOn: '',
        errorStartsOn: false,
        startsOnStyle: {},

        time: '',
        errorTime: false,
        timeStyle: {},

        duration: 0,
        errorDuration: false,
        durationStyle: {},

        validation: false
    }

    setValues = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.target.name;
        const ifEmpty = value.length === 0;
        const ifNumberEmptyOrZero = value <= 0;
        const ifNumberEmpty = value < 0;
        const ifNumberLessTen = value < 10;
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
                        errorPayment: ifNumberEmptyOrZero,
                        paymentStyle: ifNumberEmptyOrZero ? style : {},
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
                if (this.state.duration >= 10) {
                    this.setState({
                        errorDuration: ifNumberLessTen,
                        durationStyle: ifNumberLessTen ? style : {},
                    })
                }
                break;
            case 'email':
                if (!((this.state.email.indexOf('@') === -1) ||
                    (this.state.email.indexOf(' ') !== -1) ||
                    (this.state.email.indexOf('.') === -1))) {
                    this.setState({
                        emailStyle: {},
                        errorEmail: false
                    })
                }
                break;
            case 'time':
                this.setState({
                    errorTime: ifEmpty,
                    timeStyle: ifEmpty ? style : {},
                })
                break;
            case 'startsOn':
                this.setState({
                    errorStartsOn: ifEmpty,
                    startsOnStyle: ifEmpty ? style : {},
                })
                break;
            default:
        }
    }
    checkEmail = () => {
        if (this.state.email !== '') {
            const ifEmailWrong = ((this.state.email.indexOf('@') === -1) ||
                (this.state.email.indexOf(' ') !== -1) ||
                (this.state.email.indexOf('.') === -1));
            const style = {
                border: 'solid 2px pink',
                outline: 'none',
            }
            this.setState({
                errorEmail: ifEmailWrong,
                emailStyle: ifEmailWrong ? style : {},
            })

        } else {
            this.setState({
                errorEmail: false,
                emailStyle: {}
            })
        }
    }

    sendEvent = () => {
        this.checkEmail();
        if ((this.state.errorStartsOn === false && this.state.startsOn !== '') &&
            (this.state.errorTime === false && this.state.time !== '') &&
            (this.state.errorTitle === false && this.state.title !== '') &&
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
                    email: this.state.email,
                    id: this.state.responsible,
                },

                startsOn: this.state.startsOn + 'T' + this.state.time, // format: YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
                duration: this.state.duration,// in seconds
            }
            console.log('Event wyslano', eventToSend);
        } else {
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

            if (this.state.time === '') {
                this.setState({
                    errorTime: true,
                    timeStyle: style,
                })
            }

            if (this.state.startsOn === '') {
                this.setState({
                    errorStartsOn: true,
                    startsOnStyle: style,
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
                    <Coordinator handleChange={this.setValues} coordinator={this.state} />
                </div>
                <div className='Event'>
                    <When handleChange={this.setValues} when={this.state} />
                </div>
                {(this.state.errorStartsOn === false && this.state.startsOn !== '') &&
                    (this.state.errorTime === false && this.state.time !== '') &&
                    (this.state.errorTitle === false && this.state.title !== '') &&
                    (this.state.errorDescription === false && this.state.description !== '') &&
                    (this.state.checked === 'first' || (this.state.checked === 'second' && this.state.payment > 0)) ?
                    <Link style={styleLink} onClick={this.sendEvent} to='/created' >PUBLISH EVENT</Link> :
                    <Link style={styleLink} onClick={this.sendEvent} to='/' >PUBLISH EVENT</Link>}
            </>
        )
    }
}

export default Event

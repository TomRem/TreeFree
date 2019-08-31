import React from 'react'

function Topic(props) {
    let styleText;
    let styleStar;
    if (props.error) {
        styleText = { color: 'pink' }
        styleStar = { color: 'pink' }
    } else {
        styleText = {};
        styleStar = { color: 'red' }
    }
    return (
        <div style={styleText}>
            {props.text} {props.required && <span style={styleStar}> *</span>}
        </div>
    )
}

export default Topic

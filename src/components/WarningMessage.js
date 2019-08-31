import React from 'react'

function WarningMessage(props) {

    let divStyle
    if (props.error) {
        divStyle = {
            visibility: 'visible',
        };

    } else {
        divStyle = {
            visibility: 'hidden',
        }
    }
    return (
        <div>
            <div style={divStyle} className="WarningMessage arrow">{props.text}</div>
        </div>
    )
}
export default WarningMessage
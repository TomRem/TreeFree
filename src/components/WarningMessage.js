import React from 'react'

function WarningMessage(props) {

    // let divStyle
    // if (props.value.length === 0 && props.clicked === true) {
    //     divStyle = {
    //         visibility: 'visible',
    //     };

    // } else {
    //     divStyle = {
    //         visibility: 'hidden',
    //     }
    // }
    return (
        <div>
            <div style={null} className="WarningMessage arrow">{props.text}</div>
        </div>
    )
}
export default WarningMessage
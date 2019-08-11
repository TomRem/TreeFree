import React from 'react'

function FormTitle(props) {
    return (
        <div>
            <header className="FormTitle">
                {props.text}
                <hr />
            </header>
        </div>
    )
}

export default FormTitle
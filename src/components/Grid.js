import React from 'react'

function Grid(props) {
    return (
        <div className='Grid'>
            <div className="item1">
                {props.leftContent}
            </div>
            <div className="item2">
                {props.centerContent}
            </div>
            <div className="item3">
                {props.rightContent}
            </div>
        </div>

    )
}

export default Grid

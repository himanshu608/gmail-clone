import React from 'react'
import './section.css'
function Section({ Icon, title, selected, color }) {
    return (
        <div className={`section`}
            style={{
                borderBottom: `${selected ? '3px' :'0px'} solid ${ color }`,
                color: `${selected? color :'black'}`
            }}
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section

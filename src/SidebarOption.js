import React from 'react'
import './sidebaroption.css'

function SidebarOption({ Icon, title, number ,isSelelected }) {
    return (
        <div className={`sidebarOption ${isSelelected && 'sidebaroption-active'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption

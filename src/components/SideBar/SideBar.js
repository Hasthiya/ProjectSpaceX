import React from 'react'
import SideBarButton from '../SideBarButton/SideBarButton'

function SideBar(props) {  
    return (
        <div className="sideBarWrapper">
            <SideBarButton ButtonTex="Missions" onClick={props.onClick} />
            <SideBarButton ButtonTex="Dragons" onClick={props.onClick}/>
            <SideBarButton ButtonTex="Capsules" onClick={props.onClick}/>
        </div>
    )
}

export default SideBar;
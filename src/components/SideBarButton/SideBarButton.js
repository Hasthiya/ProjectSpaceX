import React from 'react'

 function SideBarButton(props) {
     
    return (
        <div className="sideBarButtonWrapper" value={props.ButtonTex} onClick={() => props.onClick(props.ButtonTex)}>
            <div className="sideBarButtonBackground">{props.ButtonTex}</div>
        </div>
    )
}

export default SideBarButton;
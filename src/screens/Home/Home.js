import React, { Component } from 'react'
import AllMissions from '../../components/AllMissions/AllMissions'
import SideBar from '../../components/SideBar/SideBar'

function Home() {

    const [sideBarValue, setSidebarValue] = React.useState("Missions");
    console.log(sideBarValue);


    const renderDetailComponent = (expression) => {
        switch(expression) {
            case "Missions":
              return <AllMissions/>
            case "Dragons":
              return <div>Dragon</div>
            case "Capsules":
              return <div>Capsules</div>
            default:
              return <div>null</div>
          }
    }

    return (
        <div>
            <div className="row no-gutters">
                <div className="col-2"><SideBar onClick={value => setSidebarValue(value)}/></div>
                <div className="col-6">{renderDetailComponent(sideBarValue)}</div>
            </div>
        </div>
    )
    
}

export default Home;

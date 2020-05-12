import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMissions, missionsSelector } from '../../store/slices/missions';

import Mission from '../Mission/Mission'

function AllMissions() {

    const [detailsVisibility, setDetailsVisibility] = useState(false);
    const [selectedMission, setSelectedMission] = useState({});

    const dispatch = useDispatch()
    const missions = useSelector(missionsSelector)

    useEffect(() => {
        dispatch(fetchMissions())
    }, [dispatch])

    const renderMissions = () => {
        if (missions.loading) return <p>Loading...</p>
        if (missions.hasErrors) return <p>Unable to display data.</p>
        if (!detailsVisibility) {
            return (
                missions.missions.map(mission =>
                    <div key={mission.mission_id} className="d-flex contentTextBackground" onClick={() => { setDetailsVisibility(!detailsVisibility); setSelectedMission(mission) }}>
                        <div className="col-3 ellipsis subtitleText">{mission.mission_name}</div>
                        <div className="col-3 ellipsis subtitleText">{mission.mission_id}</div>
                        <div className="col-6 ellipsis subtitleText">{mission.description}</div>
                    </div>
                ))
        } else {
            return null
        }
    }

    const renderMissionsHeader = () => {
        if(!detailsVisibility){
            return(
                <div className="d-flex subTitleBackground">
                        <div className="col-3 subtitleText">Mission</div>
                        <div className="col-3 subtitleText">ID</div>
                        <div className="col-6 subtitleText">Description</div>
                    </div>
            )
        } else {
            return null
        }
    }

    const renderMissionTitle = () => {
        if (!detailsVisibility) {
            return (
                "All Missions"
            )
        } else {
            return (
                selectedMission.mission_name
            )
        }
    }

    const renderCloseButton = () => {
        if (detailsVisibility) {
            return (
                <div className="col-6 closeButtonBackground">
                    <div className="d-flex justify-content-end" onClick={() => setDetailsVisibility(!detailsVisibility)}>X</div>
                </div>
            )
        } else {
            return null
        }
    }

    const renderTitleRowStyles = () => {
        if(!detailsVisibility){
            return "d-flex titleRowBackground"
        } else {
            return "d-flex titleRowBackgroundActive"
        }
    }

    const renderTitleBackgroundStyles = () => {
        if(!detailsVisibility){
            return "col-6 titleBackground"
        } else {
            return "col-6 titleBackgroundActive"
        }
    }

    return (
        <Fragment>
            <div className="allMissionsBackground">
                <div><h5>Missions</h5></div>
                <div className="allMissionsBodyContainer">
                    <div className={renderTitleRowStyles()}>
                        <div className={renderTitleBackgroundStyles()}>{renderMissionTitle()}</div>
                        {renderCloseButton()}
                    </div>
                    <div className="missionsBodyWrapper">
                        <Mission mission={selectedMission} visibility={detailsVisibility} />
                        {renderMissionsHeader()}
                        {renderMissions()}
                    </div>                   
                </div>
            </div>
        </Fragment>
    )
}

export default AllMissions;
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMissions, missionsSelector } from '../../store/slices/missions';

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

    function MissionDetails(props, { children }) {
        if (detailsVisibility) {
            return (
                <Fragment>
                    <div className="expandedMissionBackground">
                        <h5>Description</h5>
                        <div>{props.mission.description}</div>

                        <div className="d-flex">
                            <div className="col-6">
                                <h5>Manufacturer/s</h5>
                                <div>
                                    {props.mission.manufacturers.map(manufacturer =>
                                        <div>
                                            {manufacturer}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <h5>Payload/s</h5>
                                <div>
                                    {props.mission.payload_ids.map(payload_id =>
                                        <div>
                                            {payload_id}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return null
        }
    }

    return (
        <Fragment>
            <div className="allMissionsBackground">
                <div><h5>Missions</h5></div>
                <div className="allMissionsBodyContainer">
                    <div className="d-flex titleRowBackground">
                        <div className="col-6 titleBackground">{renderMissionTitle()}</div>
                    </div>
                    <MissionDetails mission={selectedMission}></MissionDetails>
                    <div className="d-flex subTitleBackground">
                        <div className="col-3 subtitleText">Mission</div>
                        <div className="col-3 subtitleText">ID</div>
                        <div className="col-6 subtitleText">Description</div>
                    </div>
                    {renderMissions()}
                </div>
            </div>
        </Fragment>
    )
}



export default AllMissions;
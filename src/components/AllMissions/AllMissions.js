import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMissions, missionsSelector } from '../../store/slices/missions';


function AllMissions() {

    const dispatch = useDispatch()
    const missions = useSelector(missionsSelector)    

    const renderMissions = () => {
        if (missions.loading) return <p>Loading...</p>
        if (missions.hasErrors) return <p>Unable to display data.</p>

        return missions.missions.map(mission =>
            <div className="row no-gutters contentTextBackground">
                <div className="col-4 subtitleText">{mission.name}</div>
                <div className="col-4 subtitleText">{mission.website}</div>
                <div className="col-4 subtitleText">{mission.description}</div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="allMissionsBackground">
                <div><h5>Missions</h5></div>
                <div className="allMissionsBodyContainer">
                    <div className="row no-gutters titleRowBackground">
                        <div className="col-4 titleBackground">All Missions</div>
                        <div className="col-4 titleBackgroundDisabled"><Button handleClick={() => dispatch(fetchMissions())}>Next Mission</Button></div>
                    </div>
                    <div className="row no-gutters subTitleBackground">
                        <div className="col-4 subtitleText">Name</div>
                        <div className="col-4 subtitleText">Date</div>
                        <div className="col-4 subtitleText">Description</div>
                    </div>
                    <div className="row no-gutters contentTextBackground">
                        {renderMissions()}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function Button({ handleClick, children }) {
    return (
        <button
            onClick={handleClick}
            type="button"
        >
            {children}
        </button>
    )
}

export default AllMissions;
import React, { Component, Fragment } from 'react'

export default class AllMissions extends Component {
    render() {
        return (
            <Fragment>
                <div className="allMissionsBackground">
                    <div className="allMissionsHeader"><h5>Missions</h5></div>
                    <div className="allMissionsBodyContainer">
                        <div className="row no-gutters titleRowBackground">
                            <div className="col-4 titleBackground">All Missions</div>
                            <div className="col-4 titleBackgroundDisabled">Next Mission</div>
                        </div>
                        <div className="row no-gutters subTitleBackground">
                            <div className="col-4 subtitleText">column one</div>
                            <div className="col-4 subtitleText">column two</div>
                            <div className="col-4 subtitleText">column three</div>
                        </div>
                        <div className="row no-gutters contentTextBackground">
                            <div className="col-4 subtitleText">Content</div>
                            <div className="col-4 subtitleText">Content</div>
                            <div className="col-4 subtitleText">Content</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

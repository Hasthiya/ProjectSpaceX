import React, { Fragment } from 'react'

export default function Mission(props) {
    if (props.visibility) {
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

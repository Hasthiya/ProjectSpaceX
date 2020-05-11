import React, { Component } from 'react'
import AllMissions from '../../components/AllMissions/AllMissions'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row no-gutters">
                    <div className="col-6"><AllMissions/></div>
                </div>
            </div>
        )
    }
}

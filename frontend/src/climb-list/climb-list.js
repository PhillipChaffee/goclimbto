import React, { Component } from 'react';
import ClimbBox from './climb-box';
import ClimbModal from './climb-modal';

function openModal(modals) {

}

class ClimbList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            climbs: [{ Name: "Crazy Climb", Location: "Media, PA", Grade: "V8/6C+", Active: "" }],
            climbModals: []
        }

        for (const climb of this.state.climbs) {
            this.state.climbModals.push(<ClimbModal climb={climb} onClick={openModal(this.state.climbModals)} />)
        }
    };

    render() {
        const items = [];

        for (const climb of this.state.climbs) {
            items.push(<ClimbBox name={climb.Name} location={climb.Location} grade={climb.Grade} />)
        }

        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="search" placeholder="Find a climb" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div className="column is-1 is-offset-7">
                            <a className="button is-pulled-right">+</a>
                        </div>
                    </div>
                    <div id="climbs">{items}</div>
                </div>

                {this.state.climbModals}
            </section>
        );
    }
}



export default ClimbList;
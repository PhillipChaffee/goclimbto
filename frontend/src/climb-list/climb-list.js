import React, { Component } from 'react';
import ClimbBox from './climb-box';
import ClimbModal from './climb-modal';

class ClimbList extends Component {
    constructor(props) {
        super(props);

        this.emptyModal = <ClimbModal climb={{}} active="" close={() => {}} />;
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            climbs: [{ Name: "Crazy Climb", Location: "Media, PA", Grade: "V8/6C+", Active: "" }],
            climbModal: this.emptyModal
        }
    };

    openModal(climb) {
        this.setState({ climbModal: <ClimbModal climb={climb} active="is-active" close={this.closeModal} /> });
    }

    closeModal() {
        this.setState({ climbModal: this.emptyModal });
    }

    render() {
        let climbs = [];

        for (let climb of this.state.climbs) {
            climbs.push(<ClimbBox climb={climb} onClick={this.openModal} />);
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
                    <div id="climbs">{climbs}</div>
                </div>

                {this.state.climbModal}
            </section>
        );
    }
}



export default ClimbList;
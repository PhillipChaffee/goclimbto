import React, { Component } from 'react';
import ClimbBox from './climb-box';
import ClimbModal from './climb-modal';
import { unwatchFile } from 'fs';

class ClimbList extends Component {
    constructor(props) {
        super(props);

        this.emptyModal = <ClimbModal active="" close={() => { }} />;
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            climbs: [],
            climbModal: this.emptyModal
        }
    };

    componentDidMount() {
        fetch("http://localhost:63547/api/v1/Climbs", {
            headers: { 'Access-Control-Allow-Origin': 'http://localhost:63547' }
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    this.setState({ climbs: data })
                }
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    openModal(climb) {
        this.setState({ climbModal: <ClimbModal climb={climb} active="is-active" close={this.closeModal} /> });
    }

    closeModal() {
        this.setState({ climbModal: this.emptyModal });
    }

    render() {
        let climbs = this.state.climbs;
        let climbBoxes = [];

        if (this.state.climbs) {
            let perColumn = this.state.climbs.length / 4;
            var inCurrentColumn = 0;
            for (var i = 0; i < 4; i++) {
                climbBoxes[i] = [];
                while (inCurrentColumn <= perColumn) {
                    climbBoxes[i].push(<ClimbBox climb={climbs.shift()} onClick={this.openModal} />)
                    inCurrentColumn++;
                }
            }

            console.log(climbBoxes);
        } else {
            return null;
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
                    <div className="columns">
                    </div>
                </div>

                {this.state.climbModal}
            </section>
        );
    }
}



export default ClimbList;
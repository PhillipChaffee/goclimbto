import React, { Component } from 'react';
import ClimbBox from './climb-box';
import ClimbModal from './climb-modal';
import AddClimbModal from './add-climb-modal';
import { unwatchFile } from 'fs';

class ClimbList extends Component {
    constructor(props) {
        super(props);

        this.emptyClimbModal = <ClimbModal active="" close={() => { }} />;
        this.emptyAddModal = <AddClimbModal active="" close={() => { }} />;
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            climbBoxes: [],
            climbModal: this.emptyClimbModal,
            addModal: this.emptyAddModal
        }
    };

    componentDidMount() {
        fetch("http://localhost:63547/api/v1/Climbs", {
            headers: { 'Access-Control-Allow-Origin': 'http://localhost:63547' }
        }).then(response => response.json())
            .then(data => {
                if (data.length != 0) {
                    let climbs = data.slice();
                    let climbBoxes = [];
                    let perColumn = climbs.length / 4;
                    for (var i = 0; i < 4; i++) {
                        var inCurrentColumn = 0;
                        climbBoxes[i] = [];
                        while (inCurrentColumn < perColumn) {
                            climbBoxes[i].push(<ClimbBox climb={climbs.shift()} onClick={this.openModal} />)
                            inCurrentColumn++;
                        }
                    }

                    this.setState({ climbBoxes: climbBoxes });
                }
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    openModal(climb) {
        if (climb) {
            this.setState({ climbModal: <ClimbModal climb={climb} active="is-active" close={this.closeModal} /> });
        } else {
            this.setState({ addModal: <AddClimbModal active="is-active" close={this.closeModal} /> })
        }
    }

    closeModal() {
        this.setState({ climbModal: this.emptyClimbModal, addModal: this.emptyAddModal });
    }

    render() {
        if (this.state.climbBoxes.length == 0) {
            return null;
        }

        let climbBoxes = this.state.climbBoxes;

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
                        <div className="column">{climbBoxes[0]}</div>
                        <div className="column">{climbBoxes[1]}</div>
                        <div className="column">{climbBoxes[2]}</div>
                        <div className="column">{climbBoxes[3]}</div>
                    </div>
                </div>

                {this.state.climbModal}
            </section>
        );
    }
}



export default ClimbList;
import React, { Component } from 'react';
import ClimbBox from './climb-box';
import ClimbModal from './climb-modal';
import AddClimbModal from './add-climb-modal';

class ClimbList extends Component {
    constructor(props) {
        super(props);

        this.emptyClimbModal = <ClimbModal active="" close={() => { }} />;
        this.emptyAddModal = <AddClimbModal active="" close={() => { }} />;

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.search = this.search.bind(this);
        this.loadClimbs = this.loadClimbs.bind(this);

        this.state = {
            climbs: [],
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
                this.loadClimbs(data);
                this.setState({ climbs: data });
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    loadClimbs(climbData) {
        if (climbData) {
            let climbs = climbData.slice();
            let climbBoxes = [];
            let perColumn = climbs.length / 4;
            for (var i = 0; i < 4; i++) {
                var inCurrentColumn = 0;
                climbBoxes[i] = [];
                while (inCurrentColumn < perColumn) {
                    climbBoxes[i].push(<ClimbBox key={"climbBox" + i} climb={climbs.shift()} onClick={this.openModal} />)
                    inCurrentColumn++;
                }
            }

            this.setState({ climbBoxes: climbBoxes });
        }
    }

    search(e) {
        let criteria = e.target.value.toLowerCase();
        let results = [];
        let terms = criteria.trim().split(" ");
        for (let climb of this.state.climbs) {
            let matches = 0;
            let climbString = climb.name + climb.grade + climb.notes + climb.location.city + climb.location.state + climb.location.country;
            climbString = climbString.toLowerCase();
            for (let term of terms) {
                if (climbString.search(term) >= 0) {
                    matches++;
                }
            }

            if (matches >= terms.length) {
                results.push({ matches: matches, climb: climb });
            }
        }

        results.sort(function (climb1, climb2) { return climb1.matches < climb2.matches });

        let sortedClimbs = [];

        for (let result of results) {
            sortedClimbs.push(result.climb);
        }

        this.loadClimbs(sortedClimbs);
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

    mainLayout(climbs) {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="search" onChange={this.search} placeholder="Find a climb" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div className="column is-1 is-offset-7">
                            <button className="button is-pulled-right" onClick={() => this.openModal(null)}>+</button>
                        </div>
                    </div>
                    {climbs}
                </div>

                {this.state.climbModal}
                {this.state.addModal}
            </section>
        );
    }

    render() {
        if (this.state.climbBoxes.length === 0) {
            this.mainLayout(null);
        }

        let climbBoxes = this.state.climbBoxes;
        let climbs = <div className="columns">
            <div className="column">{climbBoxes[0]}</div>
            <div className="column">{climbBoxes[1]}</div>
            <div className="column">{climbBoxes[2]}</div>
            <div className="column">{climbBoxes[3]}</div>
        </div>;

        return (
            this.mainLayout(climbs)
        );
    }
}



export default ClimbList;
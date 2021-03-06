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
            climbBoxes: [],
            climbModal: this.emptyClimbModal,
            addModal: this.emptyAddModal
        }
    };

    loadClimbs(climbData) {
        if (climbData && climbData.length !== 0) {
            let climbs = climbData.slice();
            let climbBoxes = [];

            let row = 0;
            while (climbs.length > 0) {
                climbBoxes[row] = [];

                let inCurrentRow = 0;
                while (inCurrentRow < 4 && climbs.length > 0) {
                    climbBoxes[row].push(<ClimbBox key={"climbBox" + row + inCurrentRow} climb={climbs.shift()} onClick={this.openModal} />)
                    inCurrentRow++;
                }
                row++;
            }

            this.setState({ climbBoxes: climbBoxes });
        }
    }

    search(e) {
        let criteria = e.target.value.toLowerCase();
        let results = [];
        let terms = criteria.trim().split(" ");
        for (let climb of this.props.climbs) {
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
                    <h1 className="title is-2 has-text-centered">Find your next project...</h1>
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="search" onChange={this.search} placeholder="Find a climb" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div className="column is-1">
                            <button className="button is-primary" onClick={() => this.openModal(null)}>Add A Climb</button>
                        </div>
                    </div>
                    <div className="tile is-ancestor is-vertical">
                        {climbs}
                    </div>
                </div>

                {this.state.climbModal}
                {this.state.addModal}
            </section>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.climbs.length !== 0 && (prevProps.climbs.length !== this.props.climbs.length || prevProps.climbs[0].Name !== this.props.climbs[0].Name)) {
            this.loadClimbs(this.props.climbs);
        }
    }

    render() {
        if (this.state.climbBoxes.length === 0) {
            return this.mainLayout(null);
        }

        let climbBoxes = this.state.climbBoxes;
        let climbs = [];

        let i;
        for (i = 0; i < climbBoxes.length; i++) {
            climbs.push(<div key={i} className="tile is-parent">{climbBoxes[i]}</div>);
        }

        return (
            this.mainLayout(climbs)
        );
    }
}

export default ClimbList;
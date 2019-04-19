import React, { Component } from 'react';
import Input from '../elements/input';
import MultiSelect from '../elements/multi-select';

class AddClimbModal extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.displayImageName = this.displayImageName.bind(this);

        this.state = { imageName: "ClimbPhoto.png" };
    }

    displayImageName(e) {
        this.setState({ imageName: e.target.files[0].name, image: e.target.files[0] });
    }

    async postClimb() {
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const data = await fetch(`http://localhost:63547/api/v1/Climbs`, settings)
            .then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(e => {
                return e
            });

        return data;
    }

    handleChange(event) {
        var stateObject = function () {
            let returnObj = {};
            returnObj[this.target.id] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    }

    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background" onClick={this.props.close}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-content">
                            <Input type="input" name="Name" placeholder="ex. The Mandala" onChange={this.handleChange} />
                            <div className="field">
                                <label className="label">Image</label>
                                <div className="file has-name">
                                    <label className="file-label">
                                        <input id="file" className="file-input" type="file" name="resume" onChange={this.displayImageName} />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <span className="file-label">
                                                Choose a file...
                                            </span>
                                        </span>
                                        <span className="file-name">
                                            {this.state.imageName}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <Input type="input" name="Latitude/Longitude" placeholders="ex. 39°55'07.4N 75°23'49.6W" onChange={this.handleChange} />
                            <Input type="input" name="Country" placeholder="USA" onChange={this.handleChange} />
                            <Input type="input" name="State" placeholder="Washington" onChange={this.handleChange} />
                            <Input type="input" name="City" placeholder="Seattle" onChange={this.handleChange} />
                            <MultiSelect name="Grade" options={["3/VB", "4/V0", "5/V1", "5+/V2", "6A/6A+/V3", "6B/6B+/V4", "6C/6C+/V5", "7A/V6", "7A+/V7", "7B/7B+/V8", "7B+/7C/V9", "7C+/V10", "8A/V11", "8A+/V12", "8B/V13", "8B+/V14", "8C/V15", "8C+/V16", "9A/V17"]} onChange={this.handleChange} />
                            <MultiSelect name="Rating" options={[1, 2, 3, 4, 5]} onChange={this.handleChange} />
                            <Input type="textarea" name="Notes" placeholder="Notes" onChange={this.handleChange} />
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.close}></button>
            </div>
        );
    }
}

export default AddClimbModal;
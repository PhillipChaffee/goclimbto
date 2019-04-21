import React, { Component } from 'react';
import Input from '../elements/input';
import MultiSelect from '../elements/multi-select';

class AddClimbModal extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.displayImageName = this.displayImageName.bind(this);
        this.postClimb = this.postClimb.bind(this);
        this.valildateInput.bind(this);
        this.resetState.bind(this);

        this.state = { imageName: "ClimbPhoto.png" };
    }

    resetState() {
        let stateObject = {};
        for (var stateKey in this.state) {
            if (this.state.hasOwnProperty(stateKey)) {
                console.log(stateKey);
                if (stateKey.toString() === "imageName") {
                    stateObject[stateKey] = "ClimbPhoto.png";
                }
                else {
                    stateObject[stateKey] = "";
                }
            }
        }

        this.setState(stateObject);
    }

    displayImageName(e) {
        let element = e.target.parentElement.parentElement;
        element.className = element.className.replace(" is-danger", "");

        this.setState({ imageName: e.target.files[0].name, image: e.target.files[0] })
    }

    async postClimb() {
        if (!this.validateOnPost()) {
            return;
        }

        fetch('http://localhost:63547/api/v1/Image/' + this.state.name + '.jpg',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:63547'
                },
                body: this.state.image
            }).catch(e => {
                return e
            });

        let climb = {
            Id: 0,
            Name: this.state.name,
            Location: { Id: 0, Country: this.state.country, State: this.state.state, City: this.state.city },
            Coordinates: { Id: 0, Latitude: parseFloat(this.state.latitude), Longitude: parseFloat(this.state.longitude) },
            Grade: this.state.grade,
            Rating: parseInt(this.state.rating),
            Notes: this.state.notes
        };

        const settings = {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:63547',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(climb)
        };

        fetch(`http://localhost:63547/api/v1/Climbs`, settings);
        this.props.close();
        this.resetState();
    }

    validateOnPost() {
        let result = true;
        let fieldsToCheck = ['name', 'country', 'state', 'city', 'latitude', 'longitude', 'image-div'];

        for (let field of fieldsToCheck) {
            if (!this.valildateInput(field, this.state[field])) {
                if (!document.getElementById(field).className.includes("is-danger")) {
                    document.getElementById(field).className += " is-danger";
                }
                result = false;
            }
        }

        return result;
    }

    valildateInput(id, value) {
        switch (id) {
            case "latitude":
            case "longitude":
                let float = parseFloat(value);
                return value !== undefined && value.trim() !== "" && typeof (float) == 'number' && value.includes('.');

            case "image-div":
                return this.state.image !== undefined;

            case "notes":
                return true;

            default:
                return value !== undefined && value.trim() !== "";
        }
    }

    handleChange(event) {
        if (!this.valildateInput(event.target.id, event.target.value)) {
            if (!event.target.className.includes("is-danger")) {
                event.target.className += " is-danger";
            }
        } else {
            event.target.className = event.target.className.replace(" is-danger", "");
        }

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
                            <Input type="input" value={this.state.name} name="Name" placeholder="ex. The Mandala" onChange={this.handleChange} />
                            <div className="field">
                                <label className="label">Image</label>
                                <div id="image-div" className="file has-name">
                                    <label className="file-label">
                                        <input id="image" className="file-input" type="file" name="resume" onChange={this.displayImageName} />
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
                            <Input type="input" value={this.state.latitude} name="Latitude" placeholder="ex. 37.3291" onChange={this.handleChange} />
                            <Input type="input" value={this.state.longitude} name="Longitude" placeholder="ex. -118.57493" onChange={this.handleChange} />
                            <Input type="input" value={this.state.country} name="Country" placeholder="USA" onChange={this.handleChange} />
                            <Input type="input" value={this.state.state} name="State" placeholder="Washington" onChange={this.handleChange} />
                            <Input type="input" value={this.state.city} name="City" placeholder="Seattle" onChange={this.handleChange} />
                            <MultiSelect name="Grade" options={["3/VB", "4/V0", "5/V1", "5+/V2", "6A/6A+/V3", "6B/6B+/V4", "6C/6C+/V5", "7A/V6", "7A+/V7", "7B/7B+/V8", "7B+/7C/V9", "7C+/V10", "8A/V11", "8A+/V12", "8B/V13", "8B+/V14", "8C/V15", "8C+/V16", "9A/V17"]} onChange={this.handleChange} />
                            <MultiSelect name="Rating" options={[1, 2, 3, 4, 5]} onChange={this.handleChange} />
                            <Input type="textarea" value={this.state.notes} name="Notes" placeholder="Notes" onChange={this.handleChange} />
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" onClick={this.postClimb}>Add</button>
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
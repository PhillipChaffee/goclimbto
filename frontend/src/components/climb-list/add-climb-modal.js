import React, { Component } from 'react';
import Input from '../elements/input';
import MultiSelect from '../elements/multi-select';

class AddClimbModal extends Component {
    constructor(props) {
        super(props);

        this.displayImageName = this.displayImageName.bind(this);

        this.state = { imageName: "ClimbPhoto.png" };
    }

    displayImageName(e) {
        this.setState({ imageName: e.target.files[0].name })
    }

    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background" onClick={this.props.close}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-content">
                            <Input type="input" name="Name" placeholder="ex. The Mandala" />
                            <div class="field">
                                <label class="label">Image</label>
                                <div class="file has-name">
                                    <label class="file-label">
                                        <input id="file" class="file-input" type="file" name="resume" onChange={this.displayImageName} />
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fas fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Choose a file...
                                            </span>
                                        </span>
                                        <span class="file-name">
                                            {this.state.imageName}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <Input type="input" name="Latitude/Longitude" placeholders="ex. 39°55'07.4N 75°23'49.6W" />
                            <Input type="input" name="Country" placeholder="USA" />
                            <Input type="input" name="State" placeholder="Washington" />
                            <Input type="input" name="City" placeholder="Seattle" />
                            <MultiSelect name="Grade" options={[1, 2, 3, 4, 5]} />
                            <MultiSelect name="Rating" options={["3/VB", "4/V0", "5/V1", "5+/V2", "6A/6A+/V3", "6B/6B+/V4", "6C/6C+/V5", "7A/V6", "7A+/V7", "7B/7B+/V8", "7B+/7C/V9", "7C+/V10", "8A/V11", "8A+/V12", "8B/V13", "8B+/V14", "8C/V15", "8C+/V16", "9A/V17"]} />
                            <Input type="textarea" name="Notes" placeholder="Notes" />
                            <div class="field is-grouped">
                                <div class="control">
                                    <button class="button is-link">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.close}></button>
            </div >
        );
    }
}

export default AddClimbModal;
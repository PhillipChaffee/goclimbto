import React, { Component } from 'react';

class AddClimbModal extends Component {
    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background" onClick={this.props.close}></div>
                <div className="modal-content">
                    <div className="card">
                        <header class="card-header">
                            <p class="card-header-title">Add a climb</p>
                        </header>
                        <div className="card-content">
                            <label htmlFor="name">Climb Name</label>
                            <input id="name" className="input" type="text" placeholder="ex. The Mandala" />
                            <label htmlFor="lat">Latitude/Longitude</label>
                            <input id="lat" className="input" type="text" placeholder="ex. 39°55'07.4N 75°23'49.6W" />
                            <label htmlFor="location">Location</label>
                            <div id="location" className="columns">
                                <div className="column">
                                    <input className="input" type="text" placeholder="Country" />
                                </div>
                                <div className="column">
                                    <input className="input" type="text" placeholder="State" />
                                </div>
                                <div className="column">
                                    <input className="input" type="text" placeholder="City" />
                                </div>
                            </div>
                            Rating
                            <div id="grade" class="select">
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
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
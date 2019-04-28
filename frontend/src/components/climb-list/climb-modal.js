import React, { Component } from 'react';

class ClimbModal extends Component {
    render() {
        let climb = this.props.climb;

        if (!this.props.climb) {
            return null;
        }

        let imageUrl = encodeURI("https://goclimbing.to/images/" + this.props.climb.name + this.props.climb.coordinates.latitude + this.props.climb.coordinates.longitude + ".jpg");

        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background" onClick={this.props.close}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-image has-background-black">
                            <figure className="image">
                                <img className="climbImage" src={imageUrl} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="title">{climb.name}</div>
                            <p className="subtitle"><a className="is-size-6" href={"https://www.google.com/maps/search/?api=1&query=" + climb.coordinates.latitude.toString() + "," + climb.coordinates.longitude.toString()} target="new">{climb.coordinates.latitude}N {climb.coordinates.longitude}W</a></p>

                            <div className="content">
                                <div className="columns">
                                    <div className="column">
                                        <div className="columns">
                                            <div className="column">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Location</td>
                                                            <td>{climb.location.city}, {climb.location.state}, {climb.location.country}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Grade</td>
                                                            <td>{climb.grade}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rating</td>
                                                            <td>{climb.rating}/5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <p className="notes">Notes</p>
                                        <p>{climb.notes}</p>
                                    </div>
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

export default ClimbModal;
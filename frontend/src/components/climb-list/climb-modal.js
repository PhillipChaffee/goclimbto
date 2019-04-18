import React, { Component } from 'react';

class ClimbModal extends Component {
    render() {
        let climb = this.props.climb;

        if (!this.props.climb) {
            return null;
        }

        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background" onClick={this.props.close}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Frereno2.files.wordpress.com%2F2014%2F09%2Fboulder.jpg" alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="title">{climb.name}</div>
                            <p className="subtitle"><a className="is-size-6" href="https://goo.gl/maps/5EuigxL4tgF2" target="new">39°55'07.4"N 75°23'49.6"W</a></p>

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
                                        <p>Notes</p>
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
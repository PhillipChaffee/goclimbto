import React, { Component } from 'react';

class ClimbModal extends Component {
    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background" onClick={this.props.close}></div>
                <div className="modal-content">
                    <div className="box">
                        <header>
                            <text className="is-size-4">{this.props.climb.Name}</text> <i className='fas fa-map-pin' /> <small>{this.props.climb.Location}</small> <i className='fas fa-hand-rock' />  <small>{this.props.climb.Grade}</small>
                        </header>
                        <section className="columns">
                            <div className="column is-4">
                                <p>Type: Boulder</p>
                                <p>Rating: 1/5</p>
                            </div>
                            <div className="column is-8">
                                <figure class="image is-5by4">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                                </figure>
                            </div>
                        </section>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.close}></button>
            </div>
        );
    }
}

export default ClimbModal;
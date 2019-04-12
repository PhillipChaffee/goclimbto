import React, { Component } from 'react';

class ClimbModal extends Component {
    render() {
        return (
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    Hello
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.close}></button>
            </div>
        );
    }
}

export default ClimbModal;
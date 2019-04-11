import React, { Component } from 'react';

class ClimbModal extends Component {
    render() {
        if(!this.props.open) {
            return null;
          }

        return (
            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        );
    }
}

export default ClimbModal;
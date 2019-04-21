import React, { Component } from 'react';

class ClimbBox extends Component {

    render() {
        if (!this.props.climb) {
            return null;
        }

        let imageUrl = encodeURI("http://localhost:8080/" + this.props.climb.name + ".jpg");

        return (
            <div className='tile box has-text-white has-text-centered' style={{ backgroundImage: "url(" + imageUrl + ")", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} onClick={() => this.props.onClick(this.props.climb)}>
                <div className="content">
                    <p className="is-size-3">{this.props.climb.name}</p>
                    <p><i className='fas fa-map-pin' /> {this.props.climb.location.city}, {this.props.climb.location.state}, {this.props.climb.location.country}</p>
                    <p><i className='fas fa-hand-rock' /> {this.props.climb.grade}</p>
                </div>
            </div>
        );
    }
}

export default ClimbBox;
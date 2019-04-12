import React, { Component } from 'react';

class ClimbBox extends Component {
    render() {
        return (
            <div className='box' onClick={this.props.onClick}>
                <div className='columns'>
                    <div className='column is-2'>
                        <figure className='image is-4by3'>
                            <img src='https://bulma.io/images/placeholders/256x256.png' />
                        </figure>
                    </div>
                    <div className='column'>
                        <div className='content'>
                            <p>
                                <strong>{this.props.name}</strong> <i className='fas fa-map-pin' /> <small>{this.props.location}</small> <i className='fas fa-hand-rock' />  <small>{this.props.grade}</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                efficitur sit amet massa fringilla egestas. Nullam condimentum
                                luctus turpis. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean efficitur sit amet massa fringilla
                                egestas. Nullam condimentum luctus turpis. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Aenean efficitur sit amet
                                massa fringilla egestas. Nullam condimentum luctus turpis. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                efficitur sit amet massa fringilla egestas. Nullam condimentum
                                luctus turpis.
              </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClimbBox;
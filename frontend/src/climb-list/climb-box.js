import React, { Component } from 'react';

class ClimbBox extends Component {
    render() {
        return (
            <div class='box'>
                <div class='columns'>
                    <div class='column is-2'>
                        <figure class='image is-4by3'>
                            <img src='https://bulma.io/images/placeholders/256x256.png' />
                        </figure>
                    </div>
                    <div class='column'>
                        <div class='content'>
                            <p>
                                <strong>Crazy Climb</strong> <i class='fas fa-map-pin' /> <small>Media, PA</small> <i class='fas fa-hand-rock' />  <small>V8/6C+</small>
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
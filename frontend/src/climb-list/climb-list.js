import React, { Component } from 'react';
import ClimbBox from './climb-box';
import ClimbModal from './climb-modal';

class ClimbList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            climbs: [{ Name: "Crazy Climb", Location: "Media, PA", Grade: "V8/6C+" },
            { Name: "Crazy Climb 2", Location: "Media, PA", Grade: "V10/7B" }]
        }
    };


    render() {
        const items = []

        for (const climb of this.state.climbs) {
            items.push(<ClimbBox name={climb.Name} location={climb.Location} grade={climb.Grade} />)
        }

        return (
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column is-4">
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="search" placeholder="Find a climb" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="column is-1 is-offset-7">
                            <a class="button is-pulled-right">+</a>
                        </div>
                    </div>
                    <div id="climbs">{items}</div>
                </div>

                <ClimbModal open={this.state.modalIsOpen} />
            </section>
        );
    }
}



export default ClimbList;
import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    getInput() {
        switch (this.props.type) {
            case "input":
                return <input className="input" type="text" placeholder={this.props.placeholder} />;
            case "textarea":
                return <textarea class="textarea" placeholder={this.props.placeholder}></textarea>;
        }
    }

    render() {
        return (
            <div className="field">
                <label className="label">{this.props.name}</label>
                <div className="control">
                    {this.getInput()}
                </div>
            </div>
        );
    }
}

export default Input;
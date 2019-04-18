import React, { Component } from 'react';

class Input extends Component {
    getInput() {
        switch (this.props.type) {
            case "textarea":
                return <textarea className="textarea" placeholder={this.props.placeholder}></textarea>;
            default:
                return <input className="input" type="text" placeholder={this.props.placeholder} />;
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
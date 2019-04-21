import React, { Component } from 'react';

class Input extends Component {
    getInput() {
        switch (this.props.type) {
            case "textarea":
                return <textarea id={this.props.name.toLowerCase()} className="textarea" placeholder={this.props.placeholder} onChange={this.props.onChange}></textarea>;
            default:
                return <input id={this.props.name.toLowerCase()} className="input" type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} />;
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
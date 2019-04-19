import React, { Component } from 'react';

class MultiSelect extends Component {
    createOption(value) {
        return <option key={value.toString()}>{value}</option>;
    }

    render() {
        let options = [];

        for (let option of this.props.options) {
            options.push(this.createOption(option));
        }

        return (
            <div className="field">
                <label className="label">{this.props.name}</label>
                <p className="control">
                    <span className="select">
                        <select id={this.props.name.toLowerCase()} onChange={this.props.onChange}>
                            {options}
                        </select>
                    </span>
                </p>
            </div>
        );
    }
}

export default MultiSelect;
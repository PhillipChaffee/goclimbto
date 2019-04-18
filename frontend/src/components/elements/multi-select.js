import React, { Component } from 'react';

class MultiSelect extends Component {
    constructor(props) {
        super(props);
    }

    createOption(value) {
        return <option selected>{value}</option>;
    }

    render() {
        let options = [];

        for (let option of this.props.options) {
            options.push(this.createOption(option));
        }

        return (
            <div class="field">
                <label class="label">{this.props.name}</label>
                <p class="control">
                    <span class="select">
                        <select>
                            {options}
                        </select>
                    </span>
                </p>
            </div>
        );
    }
}

export default MultiSelect;
import React, { Component } from 'react';

export default class InputNameChange extends Component {
    state = { value: this.props.value};
    handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    }
    handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ value: e.target.value });
    }
    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" onChange={this.handleChange} value={this.state.value} />
            </form>
        )
    }
}
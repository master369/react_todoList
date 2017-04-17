import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('categoryStore', 'uiStore')
@observer
export default class AddCategoryInput extends Component {
    state = {
        inputValue: ''
    }
    handleAddNew = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.categoryStore.selected && this.state.inputValue) {
            this.props.categoryStore.create(this.state.inputValue, this.props.categoryStore.selected);
        } else if(this.state.inputValue){
            this.props.categoryStore.create(this.state.inputValue);
        }
        this.setState({ inputValue: '' });
    }
    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render = () => {
        return (
            <div className='row'>
                <div className='col-xs-12'>
                    <input className='form-control' onChange={this.handleInputChange} value={this.state.inputValue} name='categoryName' />
                </div>
                <div className='col-xs-12'>
                    <button className="btn btn-default" onClick={this.handleAddNew}>{this.props.categoryStore.selected ? `Add to category ${this.props.uiStore.currentCategory[0].title}` : 'Add new'}</button>
                </div>
            </div>
        )
    }
}
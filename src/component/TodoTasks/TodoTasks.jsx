import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoTask from './TodoTask';
import './TodoTask.scss';

@inject('taskStore','uiStore', 'categoryStore')
@observer
export default class TodoTasks extends Component {
    state = {
        inputValue: ''
    }
    handleAddNew = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.categoryStore.selected) {
           this.props.taskStore.create(this.state.inputValue, this.props.categoryStore.selected);
        } else {
            this.props.taskStore.create(this.state.inputValue);
        }
        this.setState({inputValue: ''});
    }
    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
    render = () => {

        return (
            <div>
                <div className='row'>
                    <div className='col-md-8'>
                        <input className='form-control' onChange={this.handleInputChange} value={this.state.inputValue} name='todoName' />
                    </div>
                    <div className='col-md-2'>
                        <button className="btn btn-default " onClick={this.handleAddNew}>Add</button>
                    </div>
                </div>
                <TodoTask tasks={this.props.uiStore.currentTasks} />
            </div>
        )
    }
}
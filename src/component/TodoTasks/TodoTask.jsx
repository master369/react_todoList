import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoTaskItem from './TodoTaskItem';

@inject('taskStore', 'uiStore')
@observer
export default class TodoTask extends Component {

    handleTaskEdit = (e) => {
        if (e.which === 13) {
            this.props.taskStore.update({ id: +e.target.dataset.id, title: e.target.value });
            this.props.uiStore.setEditTask(null);
        }
    };
    handleEditClick = (e) => this.props.uiStore.setEditTask(+e.target.dataset.id);
    handleEdit = (e) => this.props.taskStore.update({ id: +e.target.dataset.id, isDone: e.target.checked });
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.taskStore.update({ id: +e.target.id, isDone: e.target.isDone.checked, title: e.target.title.value, description: e.target.description.value });
        this.props.uiStore.setEditTask(null);
    }

    render = () => {
        return (
            <section className="todolist_content">
                {this.props.tasks.map(task =>
                    <TodoTaskItem key={task.id} task={task} handleSubmit={this.handleSubmit} selected={this.props.uiStore.editTaskId === task.id} handleTaskEdit={this.handleTaskEdit} handleEditClick={this.handleEditClick} />
                )}
            </section>
        )
    }
}
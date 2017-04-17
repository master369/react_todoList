import React, { Component } from 'react';

export default class TodoTaskItem extends Component {
    render() {
        if (this.props.selected) {
            return (
                <form action="" className="form-group todolist_item_theme" onSubmit={this.props.handleSubmit} id={this.props.task.id}>
                    <input className="form-control" data-id={this.props.task.id} type="text" name="title" onKeyDown={this.props.handleTaskEdit} defaultValue={this.props.task.title} autoFocus />
                    <input className="form-control" name="isDone" type="checkbox" defaultChecked={this.props.task.isDone} data-id={this.props.task.id} />
                    <textarea className="form-control" name="description" defaultValue={this.props.task.description}></textarea>
                    <button className="btn btn-success pull-right" type="submit">Save</button>
                </form>
            )
        }
        return (
            <section className="todolist_item todolist_item_theme" >
                <section>
                    <input type="checkbox" defaultChecked={this.props.task.isDone} data-id={this.props.task.id} onChange={(e) => this.props.taskStore.update({ id: this.props.task.id, isDone: e.target.checked })} />
                </section>
                <section className="item_text" >
                    <span>{this.props.task.title}</span>
                </section>
                <section>
                    <button className="btn btn-primary btn-sm"><i className="glyphicon glyphicon-chevron-left"></i>Move to category</button>
                    <button className="btn btn-warning btn-sm" data-id={this.props.task.id} onClick={this.props.handleEditClick}>Edit</button>
                    <button className="btn btn-danger btn-sm">
                        <i className="glyphicon glyphicon-remove"></i>
                        <span>Remove</span>
                    </button>
                </section>
            </section>
        )
    }
}
import React, { Component } from 'react';
import TodoCategory from './TodoCategory';
import {  inject,observer } from 'mobx-react';
import { Modal } from 'react-bootstrap';
import InputNameChange from '../Partial/InputNameChange/InputNameChange';

@inject('taskStore', 'uiStore')
@observer
export default class TodoCategoryItem extends Component {
    state = { hide: true,  showModal: false , changed: false};
  close=()=>{
    this.setState({showModal: false});
  }
  openModal=(e)=>{
	  if (+e.target.id){
  		  this.props.uiStore.setDeletedTask(+e.target.id);
  		  this.setState({showModal: true});
	  }
  }

   handleSelect = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.categoryStore.setSelected(+this.props.id);
    }
    toggleChildVisibility = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ hide: !this.state.hide });
    }
    handleDelete = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.categoryStore.deleteCategory(+this.props.id);
    }
    handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ changed: !this.state.changed });
    }
    handleEdit = (title) => {
        this.props.categoryStore.update(this.props.id, title);
        this.setState({ changed: !this.state.changed });
    }
    render = () => {
        return (
            <section>
            <li href="#" className={`category-list__item ${this.props.id === this.props.categoryStore.selected ? 'selected' : ''}`}  onClick={this.handleSelect}>
                {this.state.changed?
                    <InputNameChange value={this.props.title} onSubmit={this.handleEdit}/>
                    :<span>{this.props.title}</span>}
                <i className={`glyphicon glyphicon-trash pull-right`} id={this.props.id} onClick={this.openModal}></i>
                <i className={`glyphicon glyphicon-edit pull-right`} onClick={this.handleChange}></i>
                <i className={`glyphicon glyphicon-plus pull-right`} onClick={this.toggleChildVisibility}></i>
                {this.props.child.length ? <TodoCategory hide={this.state.hide} categoryStore={this.props.categoryStore} categories={this.props.child} /> : null}
            </li>
        <Modal
          show={this.state.showModal}
          onHide={this.close}>
      <div className="modal-header">
        <button type="button" onClick={this.close} className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title">Подтверждение</h4>
      </div>
      <div  className="modal-body">
        <p>Вы действительно желаете удалить
			 {this.props.uiStore.deletedTask.title}
		 </p>
      </div>
      <div className="modal-footer">
        <button type="button"  onClick={this.handleDelete} className="btn btn-primary">ok</button>
        <button type="button" onClick={this.close} className="btn btn-warning" >Close</button>
      </div>
        </Modal>
        </section>
        )
    }
}
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './TodoCategory.scss';
import TodoCategoryItem from './TodoCategoryItem';

@inject('categoryStore')
@observer
export default class TodoCategory extends Component {
    render = () => {
        return (
            <div className={`${this.props.hide ? 'hidden' : ''}`}>
                <ul className="category-list">
                {
                    this.props.categories.map(category =>
                        <TodoCategoryItem
                            key={category.id}
                            {...category}
                            categoryStore={this.props.categoryStore}/>)
                }
                </ul>
            </div>
        )
    }
}
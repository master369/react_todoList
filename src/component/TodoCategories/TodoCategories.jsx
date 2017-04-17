import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoCategory from './TodoCategory';
import './TodoCategory.scss';
import * as categoryApi from '../../api/category'

@inject('categoryStore')
@observer
export default class TodoCategories extends Component {
    componentDidMount = () => {
        categoryApi.getCategories();
    }
    render = () => {

        return <TodoCategory categories={this.props.categoryStore.categories} />
    }
}
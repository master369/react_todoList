import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import TodoCategories from '../TodoCategories/TodoCategories';
import TodoTasks from '../TodoTasks/TodoTasks';
import HeaderCustom from '../Partial/Header/Header';
import AddCategoryInput from '../Partial/addCategoryInput/addCategoryInput';

export default class App extends Component {
    render = () => {
        return (
            <section>
                <HeaderCustom />
                <div className="container">
                    <DevTools />
                    <div className="row">
                        <div className="col-xs-4">
                        <AddCategoryInput/>
                            <TodoCategories />
                        </div>
                        <div className="col-xs-8">
                            {<TodoTasks />}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
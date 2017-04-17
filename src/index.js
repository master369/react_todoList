import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import categoryStore from './stores/categoryStore';
import taskStore from './stores/taskStore';
import uiStore from './stores/uiStore';
import App from './component/App/App';
import './scss/reset.scss'

ReactDOM.render(
    <Provider categoryStore={categoryStore} taskStore={taskStore} uiStore={uiStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)
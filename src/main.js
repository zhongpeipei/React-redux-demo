/**
 * Created by zhongpeipei on 2017/3/10.
 */
import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/configStore';
import {Provider} from 'react-redux';

import App from './containers/App/index'

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('example')
);
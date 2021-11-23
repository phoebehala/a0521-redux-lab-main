import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import myStore from './redux/p/store'
import MyPeople from './containers/MyPeople';

ReactDOM.render(
    <Provider store={myStore} >
          <div className="App">
            <MyPeople/>
          </div>
    </Provider>
    ,document.getElementById('root'));

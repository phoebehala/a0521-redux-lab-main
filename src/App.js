import React, { Component } from 'react';

import P from './components/Person/P';

import {Provider} from 'react-redux';
import myStore from './redux/p/store'


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <ol>
      //     <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
      //   </ol>
      //   <People />

        
      // </div>

      <Provider store={myStore} >
          <div className="App">
            <P/>
          </div>
      </Provider>

      
    );
  }
}

export default App;

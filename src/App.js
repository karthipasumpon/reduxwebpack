import React from 'react';
import AddCustomer from './AddCustomer';
import './App.css';
import ViewCustomer from './ViewCustomer';
import {Provider} from 'react-redux'
import {store} from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <AddCustomer />
          <ViewCustomer />
      </div>
    </Provider>
  );
}

export default App;

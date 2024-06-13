import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routing from './routes/Routing/Routing';
import '../src/Styles/Admin/Admin.css'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import commentlist  from '../src/modules/comment';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(commentlist, composeWithDevTools() );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


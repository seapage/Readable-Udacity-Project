import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store.js';
import { Provider } from 'react-redux';

console.log("zmienne serweropwe");
console.log(process.env);
ReactDOM.render(
  <Provider store={store}>
                	<App />
  </Provider>
  
  ,document.getElementById('root'));
registerServiceWorker();

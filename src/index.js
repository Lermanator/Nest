import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div id = "appwrapper">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

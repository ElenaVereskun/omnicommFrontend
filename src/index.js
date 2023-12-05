const React = require('react');
const ReactDOM = require('react-dom');
const ReactApp = require('./app.js').App;
import { BrowserRouter } from 'react-router-dom';
/* import reportWebVitals from './reportWebVitals'; */

/* const el = document.getElementById("root")
ReactDOM.render(<ReactApp />, el) */ //так было

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <ReactApp />

    </BrowserRouter>
  </React.StrictMode>
);
/* reportWebVitals(); */
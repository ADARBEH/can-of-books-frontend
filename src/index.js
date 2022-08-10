import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Updatebook from './component/Updatebook'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
        domain={`${process.env.REACT_APP_DOMAIN}`}
        clientId={`${process.env.REACT_APP_CLIENTID}`}
        redirectUri={window.location.origin}
    > <Router>
    <Routes>
      <Route exact path='/' element={ <App />} />
      <Route path='/books/:id' element={<Updatebook />} />
    </Routes>

  </Router>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

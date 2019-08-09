import React from 'react';
import FormikLoginForm from './components/LoginForm'
import Home from './components/Home'
import {Route, Link} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <div className="App">
      <nav><Link to='/'>home</Link>
      <Link to='/form'>form</Link>
      </nav>
      <Route path="/form" component={FormikLoginForm} />
    </div>
  );
}

export default App;

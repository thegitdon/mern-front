//import logo from './logo.svg';
//import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navi from './components/Nav'
import creOrd from './components/CreateOrder'
import creUsr from './components/CreateUser'
import ordList from './components/OrderList'
//import logComp from './components/login'
import Signin from './components/signin'
import Signup from './components/signup'
import Home from './components/Home'

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    /*<div>
      <Navi/>
      Ronald :-)
    </div>*/

    <Router>

      <Navi />

      {/*<Route path="/" exact component={ordList}/>
      <Route path="/edit/:id" component={creOrd}/>
      <Route path="/create" component={creOrd}/>
  <Route path="/user" component={creUsr}/>*/}

  {/*</Router><Route path="/" component={logComp}>*/}

      <div className="container p-4">
        <Route path="/" exact component={ordList} />
        <Route path="/edit/:id" component={creOrd} />
        <Route path="/create" component={creOrd} />
        <Route path="/user" component={creUsr} />
        {/** */}
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/teststock" component={Home}/>
      </div>
    </Router>
  );
}

export default App;

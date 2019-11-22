import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar'
import Turntable from './components/View/Turntable'
import DisplayAll from './components/View/displayAll'
import Create from './components/Create/Create'
import Edit from './components/Edit/Edit'
import Snoop from './components/View/dog'
import Auth from './components/Auth/Auth'
import './App.css';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

// Add turnary that will swap from get all home page to 
// login/signup that checks token

function App() {

  const [sessionToken, setSessionToken] = useState()
  console.log(sessionToken)

  const viewConductor = () => {
    return sessionToken === undefined ? <Auth setSession={setSessionToken}/> : <Turntable />
  }//This is the ternary which controls the sign in swap with the home page
  // If the session token is undefined it displays Auth, which takes the useState as 
  //A prop and returns it upon succesful sign up/login as a session token in the useState()
  // This then triggers the else of this ternary which displays <Turntable/> || The home page

  const viewConductorTwo = () => {
    return sessionToken === undefined ? <Snoop /> : <DisplayAll token={sessionToken}/>
  }


  return (
    <div>
    <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Logout</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/home">
                        <Navbar setSession={setSessionToken} />
                    </Route>
                </Switch>
            </div>
        </Router>
    <div className="App">
    {/* <Navbar setSession={setSessionToken}/> */}
    <br/>
    <hr color="#546A7B"/>
    {viewConductor()}
    <hr color="#546A7B"/>
    {viewConductorTwo()}
    {/* <Auth /> */}
    {/* <Turntable /> */}
    {/* <hr />
    <hr /> */}
    <br />
    </div>
    </div>
  );
}

export default App;
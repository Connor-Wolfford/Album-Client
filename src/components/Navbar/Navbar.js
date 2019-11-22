import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Logout from './Logout/Logout'
import Auth from '../Auth/Auth'
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1, 
    },
    title: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: '#546A7B',
    },
})

const Navbar = (props) => {

    const classes = useStyles()

    return(
        // <Router>
        //     <div>
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <Link to="/users">Auth</Link>
        //                 </li>
        //             </ul>
        //         </nav>
        //         <Switch>
        //             <Route path="/users">
        //                 <Auth />
        //             </Route>
        //         </Switch>
        //     </div>
        // </Router>
        <div className ={classes.root}>
            <AppBar position="static">
            <ToolBar className={classes.color}>
            {/* <Button type="button" color="inherit" onClick={() => { console.log('onClick'); }}>Login</Button> */}
            <Logout setSession={props.setSession}/>
            </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar
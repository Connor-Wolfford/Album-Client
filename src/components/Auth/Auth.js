import React, {useState} from 'react'
import './Auth.css'
import APIURL from '../../helpers/enviroment'

const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(true)

    const title = () => {
        return login ? 'Login' : 'Signup';
    }

    const buttonTitle = () => {
        return login ? 'Signup' : 'Login'
    }

    const loginToggle = (event) => {
        event.preventDefault()
        setLogin(!login)
        setEmail('')
        setUsername('')
        setPassword('')
    }

    const signupFields = () => !login ?
    (
        <div className="auth">
            <label htmlFor='email'>E-Mail:</label>
            <br/>
            <input type type='email' id='email' className='input' value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
    ): null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // const url = login ? 'https://cnw-bluealbum-server.herokuapp.com/user/signin' : 'https://cnw-bluealbum-server.herokuapp.com/user/createuser'
        const url = login ? `${APIURL}/user/signin` : `${APIURL}/user/createuser`

        const bodyObj = login ? {user: {
            username: username,
            password: password
        }}:
        {user:{
            email: email,
            username: username,
            password: password
        }}
        // console.log(bodyObj)
        // fetch(`${APIURL}/user/creatuser`, {
            fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.setSession(json.sessionToken))
    }//Here is where props is being used in Auth, basically it takes the
    //session token and moves it back to the useState in App.js

    return(
        <div>
        <div className="auth">
            <form  onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='username'>Username:</label>
                <br/>
                <input type='text' id='username' className='input' value={username} onChange={event => setUsername(event.target.value)} />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' minLength="5" id='password' className='input' value={password} onChange={event => setPassword(event.target.value)} />
                <br/>
                <button type='submit' id="button">Submit</button>
                <br/>
                <button onClick={loginToggle} id="button">{buttonTitle()}</button>
            </form>
        </div>
        <br/>
        </div>
    )
}

export default Auth
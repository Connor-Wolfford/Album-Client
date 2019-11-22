import React from 'react'
import './Logout.css'
import logout from '../../../assets/logout - Copy.png'

const Logout = (props) => {
    return(
        <div>
            <img onClick={() => props.setSession(undefined)} id='logout' src={logout} alt='exit' />
        </div>
    )
}

export default Logout
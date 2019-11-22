import React from 'react'
import styled from 'styled-components'
import Snoop from '../../assets/diodoubleg.gif'

const Resize = styled.img`
width: 18vw;
height: auto;
display: block;
margin: 0 auto
`

const snoop = () => {
    return(
        <div>
            <div>
            <Resize src={Snoop}/>
            </div>
        </div>
    )
}

export default snoop
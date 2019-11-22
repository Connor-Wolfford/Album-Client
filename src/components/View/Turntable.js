import React from 'react'
import styled from 'styled-components'
import Turntable from '../../assets/turntablegif.gif'

const Resize = styled.img`
width: 50vw;
height: auto;
display: block;
margin: 0 auto
`

const ViewOne = () => {
    return(
        <div>
            <div>
            <Resize src={Turntable}/>
            </div>
        </div>
    )
}

export default ViewOne
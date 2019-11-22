import React from 'react'
import './displayAll.css'
import styled from 'styled-components'
import Albums from '../Albums/Albums'

const displayAll = (props) => {
    console.log(props)
    return(
        <div>
            <h1>~Top Records~</h1>
            <Albums token={props.token}/>
        </div>
    )
}

export default displayAll
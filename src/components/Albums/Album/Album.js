import React from 'react'
// import 'Album.css'
import {CardTitle, CardBody, CardText} from 'reactstrap'
const Album = (props) => {
    console.log(props)

    return(
        <div className="style">
        <CardBody>
            <CardTitle>{props.album.albumTitle}</CardTitle>
            <CardText>{props.album.artist}</CardText>
            <CardText>Songs: {props.album.numberOfSongs}</CardText>
            <CardText>Tracklist: {props.album.songs}</CardText>
            <CardText>ID: {props.album.id}</CardText>
        </CardBody>
        </div>
    )
}

export default Album
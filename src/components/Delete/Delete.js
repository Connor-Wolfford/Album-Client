import React, {useState, useEffect} from 'react'
import {Button} from 'reactstrap'
// import 'Delete.css'
import Album from '../Albums/Album/Album'
import Albums from '../Albums/Albums'
import APIURL from '../../helpers/enviroment' 

const Delete = (props) => {

    const [albumTitle, setAlbumTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [numberOfSongs, setNumberOfSongs] = useState('')
    const [songs, setSongs] = useState('')

    const handleSubmit = (e) => {
        console.log(props.album.id)
        // e.preventDefault()

        fetch(`${APIURL}/album/delete/${props.album.id}`, {
            method: 'DELETE',
            body: JSON.stringify({albumTitle: albumTitle, artist: artist, numberOfSongs: numberOfSongs, songs: songs}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
    }

    return(
        <div>
        <Button className="delete" type="button" onClick={handleSubmit}>Delete</Button>
        </div>
    )
}

export default Delete
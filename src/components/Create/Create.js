import React, {useState, useEffect} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import './Create.css'
import APIURL from '../../helpers/enviroment'

const Create = (props) => {
    console.log(props)
    const [albumTitle, setAlbumTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [numberOfSongs, setNumberOfSongs] = useState('')
    const [songs, setSongs] = useState('')

    const handleSubmit = (e) => {

        // const albumObj = {
        //     albumTitle: albumTitle,
        //     artist: artist,
        //     numberOfSongs: numberOfSongs,
        //     songs: songs
        //

        e.preventDefault()
        fetch(`${APIURL}/album/create`,{
        method: 'POST',
        body: JSON.stringify({albumTitle: albumTitle, artist: artist, numberOfSongs: numberOfSongs, songs: songs}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => res.json())
    .then((albumData) => {
        console.log(albumData)
        setAlbumTitle('')
        setArtist('')
        setNumberOfSongs('')
        setSongs('')
    })
    }

    return (
        <div className="mainDiv">
        <Form onSubmit={handleSubmit}>
        <h2>Add An Album From Your Collection</h2>
            <FormGroup>
                <h5>Album Title</h5>
                <Label htmlFor="albumTitle" />
                <Input name="albumTitle" value={albumTitle} onChange={(e) => setAlbumTitle(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <h5>Artist</h5>
                <Label htmlFor="artist" />
                <Input name="artist" value={artist} onChange={(e) => setArtist(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <h5>Songs</h5>
                <Label htmlFor="numberOfSongs" />
                <Input name="numberOfSongs" value={numberOfSongs} onChange={(e) => setNumberOfSongs(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <h5>Tracklist</h5>
                <Label htmlFor="songs" />
                <Input name="songs" value={songs} onChange={(e) => setSongs(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Add Album</Button>
        </Form>
        </div>
    )
}

export default Create
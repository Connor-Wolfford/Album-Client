import React, {useState, useEffect} from 'react'
import './Albums.css'
import {Card} from 'reactstrap'
import {Button} from 'reactstrap'
import {Container, Row, Col} from 'reactstrap'
import Album from './Album/Album'
import Create from '../Create/Create'
import Delete from '../Delete/Delete'
import Edit from '../Edit/Edit'
import { CardMedia } from '@material-ui/core'
import APIURL from '../../helpers/enviroment'
// import { get } from 'http'

// const testAlbums = [
    //     {
    //         albumTitle: 'In The Court Of The Crimson King',
    //         artist: 'King Crimson',
    //         numberOfSongs: '5',
    //         songs: '21st Century Schizoid Man, I Talk To The Wind, Epitaph, Moonchild, The Court Of The Crimson King'
    //     },
    //     {
    //         albumTitle: 'Relaxer',
    //         artist: 'alt-J',
    //         numberOfSongs: '8',
    //         songs: '3WW, In Cold Blood, House Of The Rising Sun, Hit Me Like That Snare, Deadcrush, Adeline, Last Year, Pleader'
    //     },
    //     {
    //         albumTitle: 'KIDS SEE GHOSTS',
    //         artist: 'KIDS SEE GHOSTS',
    //         numberOfSongs: '7',
    //         songs: 'Feel The Love(feat. Pusha T), Fire, 4th Dimension (feat. Louis Prima), Freeee(Ghost Town Pt. 2)(feat. Ty Dolla $ign), Reborn, Kids See Ghosts (feat. Yasiin Bey), Cudi Montage'
    //     }
    // ]

const Albums = (props) => {

    const [albums, setAlbums] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [albumEdit, setAlbumEdit] = useState({})


    const albumRows = () => {
        return albums.map((albumInfo, index) => 
        {
            return(
                <Card className="cardName" key={index}>
                    <Album  album={albumInfo} />
                    <Delete  token={props.token} album={albumInfo}/>
                    <Edit album={albumInfo} token={props.token} index={index}  albumEditUpdate={albumEditUpdate} Albums={Albums} updateOn={updateOn} updateOff={updateOff}/>
                </Card>
            )
        })
    }

    useEffect(() => {
        fetch(`${APIURL}/album`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setAlbums(json))
        .catch (err => console.log(err))
    }, [])

    const albumEditUpdate = (updateActive) => {
        setAlbumEdit(updateActive)
        console.log(updateActive)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }
    
    return(
        <div>
        <div className="mainDiv">
        {albumRows()}
        </div>
        <hr />
        <Create token={props.token}/>
        <hr />
        </div>
    )
}

export default Albums
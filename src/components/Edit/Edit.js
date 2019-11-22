import React, {useState, useEffect} from 'react'
import {Button, Form, FormGroup, Label, Input, Collapse, CardBody, Card, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import './Edit.css'
import Album from '../Albums/Album/Album'
import Albums from '../Albums/Albums'
import APIURL from '../../helpers/enviroment'

const Edit = (props) => {
    const [editAlbumTitle, setEditAlbumTitle] = useState(props.album.albumTitle)
    const [editArtist, setEditArtist] = useState(props.album.artist)
    const [editNumberOfSongs, setEditNumberOfSongs] = useState(props.album.numberOfSongs)
    const [editSongs, setEditSongs] = useState(props.album.songs)

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    // [props.index]



    const handleSubmit = (e, Albums) => {

        e.preventDefault()
        fetch(`${APIURL}/album/update/${props.album.id}`,{
        method: 'PUT',
        body: JSON.stringify({albumTitle: editAlbumTitle, artist: editArtist, numberOfSongs: editNumberOfSongs, songs: editSongs}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => {
        props.albumEditUpdate()
        props.updateOn()
    })
    }
      
        return (
          <div className="expand">
            <Modal isOpen={true}>
              <ModalHeader>Modify Album</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="albumTitle">New Title</Label>
                    <Input name="albumTitle" value={editAlbumTitle} onChange={(e) => setEditAlbumTitle(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="artist">New Artist</Label>
                    <Input name="artist" value={editArtist} onChange={(e) => setEditArtist(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="numberOfSongs">New Song #</Label>
                    <Input name="numberOfSongs" value={editNumberOfSongs} onChange={(e) => setEditNumberOfSongs(e.target.value)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="songs">New Tracklist</Label>
                    <Input name="songs" value={editSongs} onChange={(e) => setEditSongs(e.target.value)}/>
                  </FormGroup>
                  <Button type="submit" onClick={handleSubmit}>Update Album</Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        );
      }

export default Edit
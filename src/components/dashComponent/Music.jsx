import React, {useState} from 'react'
import Ep from '../../img/ep.jpg'
import ModalAddToPlaylist from '../modal/ModalAddToPlaylist'
import {FaPlayCircle,FaPlus} from 'react-icons/fa'
import { Modal } from 'react-bootstrap'

const MusicList = ({pic}) => {

    const [toggle, setToggle] = useState(false)

    const Musics = [
        {
            title: 'Title',
            cover: 'Cover'
        },
        {
            title: 'Title',
            cover: 'Cover'
        },
        {
            title: 'Title',
            cover: 'Cover'
        },
        {
            title: 'Title',
            cover: 'Cover'
        },
        {
            title: 'Title',
            cover: 'Cover'
        },
        {
            title: 'Title',
            cover: 'Cover'
        },
        {
            title: 'Title',
            cover: 'Cover'
        }
    ]

    const [modal, setModal] = useState(false)

    return (
        <div className='Music' >
            <ul>
                { Musics.map((item, i) => (
                    <li key={i} className='MusicList' >
                        <div>
                            <h5>{item.title}</h5>
                            <h6>{item.cover}</h6>
                        </div>
                        <div className='btns'>
                            <FaPlayCircle 
                                data-toggle="tooltip" 
                                data-placement="left" 
                                title="Play music" 
                                className='FaPlayCircle'
                            />

                            <FaPlus
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="Add to playlist" 
                                className='FaBookmark'
                                onClick={() => setModal(true)}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            <ModalAddToPlaylist show={modal} onClose={ () => setModal(false)}/>

        </div>
    )
}

export default MusicList

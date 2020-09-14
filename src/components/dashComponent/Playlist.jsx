import React from 'react'

const Playlist = ({Music}) => {
    return (
        <div className='grid-music'>

            { Music.map((title, key) => (
                <GridMusic key={key} title={title}/>
            )) }

        </div>
    )
}

export default Playlist

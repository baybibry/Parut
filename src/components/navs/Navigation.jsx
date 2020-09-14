import React from 'react'
import {FaMusic, FaTh, FaRegBookmark,FaBookOpen} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navigation = ({link}) => {

    return (
        
        <div className='bg-parut'>

                <Link to='/myhome/playlist'>
                    <section>
                        <h5> Playlist <FaRegBookmark style={{color: 'rgb(60, 226, 255)'}}/> </h5>
                    </section>
                </Link>
                    
                <Link to='/myhome/music'>
                    <section>
                        <h5> Music <FaMusic style={{color: 'rgb(255, 68, 68)'}}/> </h5>
                    </section>
                </Link>
                
        </div>
    )
}

export default Navigation

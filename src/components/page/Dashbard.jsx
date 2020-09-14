import React, {useState} from 'react'
import Navbar from '../navs/Navbar'
import MusicList from '../dashComponent/Music'
import GridMusic from '../dashComponent/GridMusic'
import Ep from '../../img/ep.jpg'
import ModalAdd from  '../dashComponent/ModalAdd'
import Navigation from '../navs/Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {FaRegPauseCircle, FaRegPlayCircle} from 'react-icons/fa'

const Dashbard = ({match}) => {

    const [togglePlay, setTogglePlay] = useState(false);

    const Music = [
        'Title',
        'Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title',
        'Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title','Title',
    ]

    return (
        <Router>
        
            <Navbar/>
            <Navigation/>

            <div className='box-music'>

                <div className='over-list'>
                    <Switch>
                        
                        <Route exact path='/myhome' render={() => (
                            <div className='welcome'>
                                <h2><span>&#128400;</span> Welcome User Name <span>&#129436;</span> </h2>
                            </div>
                        )}/>

                        <Route path='/myhome/playlist' render={() => (
                            <div className='grid-music'>

                                { Music.map((title, key) => (

                                     key === 0 ?  <ModalAdd/> :<GridMusic key={key} title={title}/> 

                                )) }

                            </div>
                        )}/>

                        <Route path='/myhome/music' render={() => (
                            <MusicList pic={Ep}/>
                        )}/> 
                        
                    </Switch>
                </div>

                <div className='music-player'>

                    <div className='img-cover'>
                        <img src={Ep} alt='img'/>
                    </div>

                    <img src={Ep} alt='img' className='round-circle'/>
                    <h3>Brian Rienz Erjas</h3>
                    <button className='out rounded-circle' onClick={() => {
                        if(!togglePlay) setTogglePlay(true)
                        else setTogglePlay(false)
                    }}>
                        { 
                            togglePlay ? 
                            <FaRegPlayCircle style={{width: '100%', height:'100%', color: '#0090ff'}}/> 
                            :
                            <FaRegPauseCircle style={{width: '100%', height:'100%', color: '#0090ff'}}/> 
                        }
                    </button>
                </div>
            
            </div>
        </Router>
    )
}

export default Dashbard

import React, {useReducer} from 'react'
import SpotifyContext from './spotifyContext'
import SpotifyReducer from  './spotifyState'
import {GET_MUSIC, SEARCH_MUSIC} from '../type'
import axios from 'axios'

const SpotifyState = props => {

    const initialState = null 

    const [state, dispatch] = useReducer(SpotifyReducer, initialState)

    return (

        // Get https://accounts.spotify.com/authorize?
        // client_id=bea853eeaba941aba1a886538c9008a6&
        // response_type=code&
        // redirect_uri=%0Ahttps%3A%2F%2Fparut.netlify.com&
        // scope=user-read-private%20user-read-email&state=34fFs29kd09

        <SpotifyContext.Provider>
            {props.children}
        </SpotifyContext.Provider>
    
    )

}

export default SpotifyState
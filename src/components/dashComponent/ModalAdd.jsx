import React, {useState} from 'react'
import {FaPlusCircle} from 'react-icons/fa'
import Modala from '../modal/Modal' 

function ModalAdd() {

    const [modal, setModal] = useState(false)

    return (
        <>
        <div className='modalAdd' onClick={() => setModal(true)}>
            <FaPlusCircle className='FaPlusCircle'/>
        </div>
        
        <Modala show={modal} onCreate={() => setModal(false)}/>

        </>
    )
}

export default ModalAdd

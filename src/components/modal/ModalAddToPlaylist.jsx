import React from 'react'
import {Modal, Button, Col, Form} from 'react-bootstrap'

function ModalAddToPlaylist(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Select playlist <i class="em em-dvd" aria-role="presentation" aria-label="DVD"></i>
                </Modal.Title>
            </Modal.Header>
        
            <Modal.Body>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item cursor">Cras justo odio</li>
                    <li class="list-group-item cursor">Dapibus ac facilisis in</li>
                    <li class="list-group-item cursor">Morbi leo risus</li>
                    <li class="list-group-item cursor">Porta ac consectetur ac</li>
                    <li class="list-group-item cursor">Vestibulum at eros</li>
                </ul>

            </Modal.Body>
        
            <Modal.Footer>
                
                <Button variant='danger' onClick={props.onClose} className='shadow-none'>Cancel</Button>
                
            </Modal.Footer>

        </Modal>
    )
}

export default ModalAddToPlaylist

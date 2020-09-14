import React from 'react'
import {Modal, Button, Col, Form} from 'react-bootstrap'

function Modala(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    New playlist 💽
                </Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <div className='container'>
                    <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className='shadow-none' type="email" placeholder="Playlist Name" />
                        </Form.Group>

                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className='shadow-none' as="textarea" placeholder="Make captivating description" rows="3" />
                    </Form.Group>

                    <div class="custom-file">
                        <input  type="file" className="custom-file-input shadow-none" id="customFile"/>
                        <label className="custom-file-label shadow-none" for="customFile">Choose Image</label>
                    </div>
                    
                    </Form>
                </div>
            </Modal.Body>
        
            <Modal.Footer>
                
                <Button variant='success' onClick={props.onCreate} className='shadow-none'>Create</Button>
                <Button variant='danger' onClick={props.onCreate} className='shadow-none'>Discard</Button>
                
            </Modal.Footer>

        </Modal>
    )
}

export default Modala

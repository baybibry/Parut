import React, {useState} from 'react'
import Prt from '../../img/prticon.png'
import {Link, withRouter} from 'react-router-dom'
import auth from '../protectedRoute/auth'
import {
  Navbar,
  Nav,
  Form,
  Image,
  Button,
  FormControl} from 'react-bootstrap'

const Navbars = (props) => {

    const [search, setSearch] = useState('')

    return (
            <Navbar  className='back-color'>
                
                <Navbar.Brand className=' ml-1 text-dark'>
                    <Link to='/myhome'>
                        <Image width={50} src={Prt} rounded/>
                    </Link>
                </Navbar.Brand>
                
                <Form className='mx-auto my-3 shadow-none' inline>
                        <FormControl type="text" placeholder="Artist, Genre, Mood" className="shadow-none mr-sm-2" onChange={ e => setSearch(e.target.value)} />
                </Form>    

                <Nav className='mr-1'>
                    <Button className='btn-outline-light rounded-0 shadow-none'
                        onClick={() =>{
                            auth.logout(() => {
                                props.history.push('/')
                            })
                        }}
                    >LogOut</Button>
                </Nav>
                
            </Navbar> 
    )
}

export default withRouter(Navbars)


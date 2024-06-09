import React from 'react'
import { Dropdown, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import navLinkNavigation from '../functions/HandleClickNavigator'

function UserElements() {
    const navigate = navLinkNavigation(useNavigate())

  return (

    <Nav className="me-auto">
        <Nav.Link onClick={()=>navigate('/create_posts')}>{"Create Posts"}</Nav.Link>
    </Nav>
    
    )
}

export default UserElements
import React, { useState } from 'react'
import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
//import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import navLinkNavigation from '../functions/HandleClickNavigator'
/*import LoginModalView from '../modals/LoginModalView'
import RegistrationModalView from '../modals/RegistrationModalView'*/
import UserElements from './UserElements';



function Header () {
    const navigate = navLinkNavigation(useNavigate())
    //const dispatch = useDispatch()
    const [adminRegistrationVisible, setAdminRegistrationVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(false)
    const [registrationVisible, setRegistrationVisible] = useState(false)
    /*const { isAuth } = useSelector(state => ({
        isAuth: state.users.isAuth
    }), shallowEqual)
    const { isUser } = useSelector(state => ({
        isUser: state.users.isUser
      }), shallowEqual)
    const { isAdmin } = useSelector(state => ({
        isAdmin: state.users.isAdmin
    }), shallowEqual)
*/
    const isAuth = true
    const getElement = () => {
        if(isAuth === true){
            return <UserElements/>
        }
    }

    const LogOut =() =>{
        sessionStorage.clear()
        /*dispatch({
            type:'LOGOUT'
          })*/
    }


    return (
        <Navbar bg="dark" variant="dark">   
                
                    <Container> 
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=>navigate('/')}>{"Posts"}</Nav.Link>
                            {getElement()}
                        </Nav>

                        <Nav className="ms-auto" navbar>
                            
                        {isAuth===true?
                            (
                                <>
                                    <Button variant={"outline-light"} onClick={() => (LogOut())} className="ms-3">{"Out"}</Button>
                                </>
                            )
                            :
                            (  <>
                                <Button variant={"outline-light"} onClick={() => navigate('/auth')} className="ms-1">{"Login or Registration"}</Button>                                
                                </>
                            )
                            
                        }
                        </Nav>
                            
                    </Container>
                
        </Navbar>
    )
    /*
                                <LoginModalView show={loginVisible} onHide={() => setLoginVisible(false)}/>
                                <RegistrationModalView show={registrationVisible} onHide={() => setRegistrationVisible(false)} change={() =>setAdminRegistrationVisible(true)}/>
                                <AdminRegModalForm show={adminRegistrationVisible} onHide={() => setAdminRegistrationVisible(false)} change={() =>setRegistrationVisible(true)}/>

    */
}

export default observer(Header)
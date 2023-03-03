import React, { useContext } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AppContext } from '../App';
import {Link,useLocation} from 'react-router-dom'
function NavBar() {
    const { user,setuser } = useContext(AppContext);
    let currentPath=useLocation().pathname
    return (
        <nav className="navbar navbar-expand-lg bg-dark  navbar-dark py-3" style={{display:'block'}}>
            <div className="container ">

                <Link to="https://github.com/Sai-Charan-Bandari/Fitness/tree/main/fitness" className="navbar-brand" style={{ fontSize: 30 }}><img src='mylogo.png' className='rounded-circle me-2' style={{
            width:50,
            height:50,
            // borderRadius: 60,
            // marginBottom: 30,
          }}></img>CROSSFIT.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon dark"></span>
                </button>
                <div className="navbar-collapse " id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="na-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="na-item"><Link to="/food" className="nav-link">FOOD</Link></li>
                        <li className="na-item"><Link to="/diet" className="nav-link">DIET</Link></li>
                        <li className="na-item"><Link to="/fitness" className="nav-link">FITNESS</Link></li>
                        <li className="na-item">{currentPath=='/'
                        ?
                            <a href="#contact" className="nav-link">CONTACTUS</a>
                        :    
                            <Link to='/contact' className="nav-link">CONTACTUS</Link>
                            }</li>
                            {/* <i className="bi bi-person-circle" ></i> */}
                        {user && 
                            <DropdownButton title={user.name} variant='dark'>
                                <Dropdown.Item>Signed in as {user.name}</Dropdown.Item>
                                <Dropdown.Item>Ph no. {user.no}</Dropdown.Item>
                                <Dropdown.Item onClick={()=>setuser(null)}>Logout</Dropdown.Item>
                            </DropdownButton>
                            }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
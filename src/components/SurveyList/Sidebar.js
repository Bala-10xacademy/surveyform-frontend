import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faHamburger,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  }
    return (

        <>
        <div className="logo">
        <span className="logo-txt">LOGO</span>
        <img src="" alt=""></img>
        <div className="sidebar">
            <ul>
                <li className='home' onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faHouse} />
                </li>
                <li >
                <FontAwesomeIcon icon={faEnvelope} />
                    
                </li>
                <li>
                    <FontAwesomeIcon icon={faHamburger} />
                </li>
            </ul>
        </div>
    </div>
    </>

    )
}

export default Sidebar

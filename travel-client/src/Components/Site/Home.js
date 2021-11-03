import React, {useState} from 'react';
import {Navbar, Nav, NavItem, Button, Glyphicon, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import Weatherapp from "../App/Weather";
import Sidebarjs from "./Sidebar";

const Home = (props) => {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    // const updateOn = () => {
    //     setIsVisible(true);
    // }

    // const updateOff = () => {
    //     setUpdateActive(false);
    // }

    const toggleModal = () => {
        setModalIsVisible(!modalIsVisible)
    }

    return(
        <>
        <button onClick={toggleModal}><Glyphicon glyph='menu-hamburger'/></button>
        <Modal isVisible={modalIsVisible}>   
            <div >
                <Sidebarjs token={props.token} />
                <h1>Travel Planning App</h1>
                <hr />
            </div>
        
        </Modal>
        </>
    );
};

export default Home;
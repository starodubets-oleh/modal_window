import React, { useState } from "react";

import Modal from "../Modal/Modal"
import ModalContent from "../ModalContent/ModalContent"
import './style.css'

const MainPage = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div>
            <div className="page">
                <button onClick={handleOpenModal} >Show details</button>
            </div>
            <Modal 
                isOpen={showModal} 
                onClose={handleCloseModal}
            >
                <ModalContent />
            </Modal>
        </div>
    );
}

export default MainPage;
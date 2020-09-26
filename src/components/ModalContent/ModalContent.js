import React from "react";
import { FaCheck } from 'react-icons/fa';

import ButtonWithDropDown from "../Button/buttonDropDownCmp"
import "./style.css"

const ModalContent = () => {
    return(
        <div className="modal-card">
            <div className="card-title">
                <ButtonWithDropDown />
            </div>
            <h1>Celebration of life</h1>
            <div className="card-inner">
                <div className="card-info">
                    <div className="card-date">
                        <p>Friday, October 20, 2019</p>
                        <p>9:00 AM - 2:00 PM</p>
                        <a href='/'>Add to Calendar</a>
                    </div>
                    <div className="card-address">
                        <p>St.Marry Church</p>
                        <p>2475 Ericsson Str., IL 60169, USA</p>
                        <a href="/">Show on map</a>
                    </div>
                </div>
                <div className="card-about">
                    <h3>About</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, labore! Ex asperiores alias quis tempore aliquam assumenda accusantium odit nobis praesentium error quisquam nesciunt quas, distinctio, harum fugiat aut at.</p>
                </div>
            </div>
            <button className="btn-card"><FaCheck />Attending</button>
        </div>
    )
}

export default ModalContent;
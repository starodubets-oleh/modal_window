import React, { useEffect, useState, useRef } from "react";
import { FaFlag, FaEnvelope } from 'react-icons/fa';

import Button from "./Button";
import DropDownCard from "./DropDownCard";
import "./style.css"

const menuItems = [
    {
        title: 'Contacts owner',
        icon: FaEnvelope,
    }, {
        title: 'Report this event',
        icon: FaFlag,
    }
]

const ButtonWithDropDown = () => {
    const [open, setOpen] = useState(false);
    const drop = useRef(null);
    const handleClick = (e) => {
        if (!e.target.closest(`.${drop.current.className}`) && open) {
            setOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
    return (
        <div
            className="dropdown"
            ref={drop}
        >
            <Button onClick={() => setOpen(open => !open)} />
            {open && <DropDownCard data={menuItems} setOpen={setOpen} />}
        </div>
    );
};

export default ButtonWithDropDown;
import React from "react";
import classNames from 'classnames';
import { FaTimes } from 'react-icons/fa';

import './style.css'

const Modal = ({ isOpen, onClose, children }) => (
    <div className={classNames(
        'modal',
        {
            'is-open': isOpen,
        }
    )
    }>
        <button className="btn-close" onClick={onClose}><FaTimes /></button>
        {children}
    </div>
)

export default Modal;

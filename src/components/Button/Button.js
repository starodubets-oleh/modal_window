import React from "react";
import { FaEllipsisH } from 'react-icons/fa';
import "./style.css"

const Button = ({ onClick }) => (
  <button className="btn-drop" onClick={onClick}>
    <FaEllipsisH />
  </button>
);

export default Button;
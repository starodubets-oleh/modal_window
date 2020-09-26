import React from "react";

const DropDownCard = ({ data = [], setOpen }) => (
  <div className="drop-list">
    <ul >
      {data.map(({ title, icon }, i) => {
        const Icon = icon;
        return (
          <li key={i} className="drop-item" onClick={() => setOpen(false)}>
            <a href="/">{<Icon className="icon" />}{title}</a>
          </li>
        )
      })}
    </ul>
  </div>
);

export default DropDownCard;

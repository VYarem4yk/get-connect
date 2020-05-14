import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog">
        <NavLink to="/Artem">Артем</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/Igor">Игорь</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/Roma">Рома</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/Alena">Алена</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/Katarzyna">Катаржина</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/profile">Наташа</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/profile">Лёша</NavLink>
      </div>
    </div>
  );
};

export default Dialogs;

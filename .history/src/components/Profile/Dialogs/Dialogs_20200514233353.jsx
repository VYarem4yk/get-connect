import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog">
        <NavLink to="/dialogs/Artem">Артем</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Igor">Игорь</NavLink>
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
        <NavLink to="/Natasha">Наташа</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/Lesha">Лёша</NavLink>
      </div>
    </div>
  );
};

export default Dialogs;

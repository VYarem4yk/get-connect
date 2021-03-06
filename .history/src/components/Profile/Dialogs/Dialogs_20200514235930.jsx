import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div></div>
      <div className="dialog">
        <NavLink to="/dialogs/Artem">Артем</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Igor">Игорь</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Roma">Рома</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Alena">Алена</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Katarzyna">Катаржина</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Natasha">Наташа</NavLink>
      </div>
      <div className="dialog">
        <NavLink to="/dialogs/Lesha">Лёша</NavLink>
      </div>
      <div className='chatBar'></div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        <div className="dialog">
          <NavLink to="/dialogs/Artem">Катаржина</NavLink>
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
          <NavLink to="/dialogs/">Артем</NavLink>
        </div>
        <div className="dialog">
          <NavLink to="/dialogs/Natasha">Наташа</NavLink>
        </div>
        <div className="dialog">
          <NavLink to="/dialogs/Lesha">Лёша</NavLink>
        </div>
      </div>

      <div className="chatBar">
        <Dialog />
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const DialogItem = (props) => {
  return (
    <div className="dialog">
      <NavLink to={"/dialogs/" + props.id}>{props.respondent}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        <DialogItem id="Katarzyna" name="Katarzyna" />
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
          <NavLink to="/dialogs/Artem">Артем</NavLink>
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

import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogWrapper">
        <DialogItem id="Katarzyna" name="Katarzyna" />
        <DialogItem id="Igor" name="Igor" />
        <DialogItem id="Roma" name="Roma" />
        <DialogItem id="Alena" name="Katarzyna" />
        <DialogItem id="Katarzyna" name="Katarzyna" />
        <DialogItem id="Katarzyna" name="Katarzyna" />
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

import React from "react";
import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog"><NavLink to="/profile">Артем</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Игорь</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Рома</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Алена</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Катаржина</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Наташа</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink></div>
    </div>
  );
};

export default Dialogs;

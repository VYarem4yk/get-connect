import React from "react";
import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog"><NavLink to="/profile">Артем</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Игорь</NavLink></div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Рома</div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Алена</div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Катаржина</div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Наташа</div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Лёша</div>
    </div>
  );
};

export default Dialogs;

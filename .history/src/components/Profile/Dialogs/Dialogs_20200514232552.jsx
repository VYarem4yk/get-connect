import React from "react";
import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Артем</div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Игорь</div>
      <div className="dialog"><NavLink to="/profile">Profile</NavLink>Рома</div>
      <div className="dialog">Алена</div>
      <div className="dialog">Катаржина</div>
      <div className="dialog">Наташа</div>
      <div className="dialog">Лёша</div>
    </div>
  );
};

export default Dialogs;

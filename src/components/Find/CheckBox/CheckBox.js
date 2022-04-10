import React from "react";
import PropTypes from "prop-types";
import style from "./CheckBox.module.scss";

function CheckBox({ id, name, funcOnChange, funChecked }) {
  return (
    <div className={style.check_box}>
      <input
        id={id}
        type="checkbox"
        onChange={funcOnChange}
        checked={funChecked(id)}
        value={id}
      />
      <label htmlFor={id}>
        <span />
        {name}
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  funcOnChange: PropTypes.func.isRequired,
  funChecked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(CheckBox);

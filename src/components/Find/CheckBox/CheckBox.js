import React from "react";
import style from  "./CheckBox.module.scss";

function CheckBox ({id, name, funcOnChange, funChecked}){



    return (
        <div >
          <input id={id} type='checkbox' onChange={funcOnChange} checked={funChecked(id)} value={id}/>
          <label for={id}>
            <span></span>
            {name}
          </label>
        </div>
    )
}

export default CheckBox
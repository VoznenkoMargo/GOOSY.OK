import React, { useState } from 'react';
import style from "./Select.module.scss"

function Select({setUrl}) {
   console.log(setUrl);
   const [value, setValue] = useState('All');
  
    setUrl(value)
   function chengeSelect(event) {
       console.log(event);
      setValue(event.target.value);
      setUrl('cold snaks')
    //   event.target.value==="Cold Snaks" && setUrl('cold snaks, coldSnaks')
   }

   return (
   <div className={style.selectConteiner}>
      <select value={value} onChange={chengeSelect}>
         <option>All</option>{/* */}
         <option >Cold Snaks</option> {/*  cold snaks, coldSnaks */}
         <option>Soup</option> {/*  soup */} 
         <option>Salads</option> {/*  salads */}
         <option>Desert</option>{/* desert */}
         <option>Hot Snaks</option>{/* hot snaks */}
         


      </select>
      <p>
         Выбрана опция: {value}
      </p>
   </div>
   );
}

export default Select;
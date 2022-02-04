import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./CheckBox.module.scss"

function CheckBox({setCateg}) {
        // const defUrl = 'http://35.180.205.240:5000/api/products/'
        const [filter,setFilter] = useState([]);
        // const dispatch = useDispatch()

        function test (e){
            const value = e.target.value
            const newFilter = [...filter]
            if (e.target.checked){
                newFilter.push(value)
            } else {
               const index = newFilter.findIndex(i => i == value)
               index===0 ? newFilter.length=0 : newFilter.splice(index,index)
            }
            setFilter(newFilter)
            setCateg(newFilter)
            console.log(newFilter);
        }

        // useEffect(() => {
        //     const newUrl = `${defUrl}filter?categories=${filter.toString()}`
        //     !filter.length==0 ? dispatch(getUrl(newUrl)) : dispatch(getUrl(defUrl))
        // }, [filter]) 

    return (
        <div className={style.checkBox_container}>
            <form>    
                <label><input id="coldSnaks"  type="checkbox" onChange={test} value="cold snaks,coldSnaks" /><p>Cold Snaks</p></label>
                <label><input id="soup" type="checkbox" onChange={test} value="soup" /><p>Soup</p></label>
                <label><input id="salads" type="checkbox" onChange={test} value="salads" /><p>Salads</p></label>
                <label><input id="desert" type="checkbox" onChange={test} value="desert" /><p>Desert</p></label>
                <label><input id="hotSnaks" type="checkbox" onChange={test} value="hot snaks" /><p>Hot Snaks</p></label>
            </form>  
        </div>
    )
}
export default CheckBox
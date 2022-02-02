import React from "react";
import "./modalcart.scss"
import { ReactComponent as IconMenu } from '../../assets/svg/CartSad.svg'

function ModalCart () {
    return(
        <div className = "modal active"  >
            <div className="modalContent">
            <span className="modalCloseBtn">X</span>
            <div className='modalMainContent'>
            <IconMenu />
            <p className="modalMainText">Your Cart Is Empty</p>
            
            <button type="button" className="modalMainBtn">Check out Menu</button>
            
            </div>
           
            </div>
        </div>
    )
}
export default ModalCart;
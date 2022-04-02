import React from "react";
import error from '../../../assets/svg/error-10379.svg'

function ModalErrorLogin () {
   

    return(
        <div className = "modal active"  >
            <div className="modalContent">
                <div className="modalContentHeader" >
                    <header className='modalHeader'> Oooops!</header>
                </div>
                <div className='modal_buttons_div'>
                    
                    <p className='mainText'>Wrong email or password:(</p>
                    <img alt="success" width="40px" src={error} />
                </div>
            </div>
        </div>
    )
} 


export default ModalErrorLogin;
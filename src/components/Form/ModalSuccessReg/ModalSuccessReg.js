import React from "react";
import success from '../../../assets/svg/success-svgrepo-com.svg'

function ModalSuccessReg () {
   

    return(
        <div className = "modal active"  >
            <div className="modalContent">
                <div className="modalContentHeader" >
                    <header className='modalHeader'> Success!</header>
                </div>
                <div className='modal_buttons_div'>
                    
                    <p className='mainText'>Regestration is successfull</p>
                    <img alt="success" width="40px" src={success} />
                </div>
            </div>
        </div>
    )
} 


export default ModalSuccessReg;
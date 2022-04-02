import React from "react";
import PropTypes from 'prop-types';

function ModalServerRegError (props) {
   const {setModalServerRegOpen, currentModalError:errorMessage } = props;

    return(
        <div className = "modal active"  >
            <div className="modalContent">
                <div className="modalContentHeader" >
                    <header className='modalHeader'> Error! </header>
                </div>
                <p className='mainText'>{errorMessage}</p>
                <div className='modal_buttons_div'>
                    <button type='button' className="modal_btn modal_btn--no" onClick={()=>setModalServerRegOpen(false)}>Ok</button>
                </div>
            </div>
        </div>
    )
} 
ModalServerRegError.propTypes = {
    setModalServerRegOpen: PropTypes.func.isRequired,
    currentModalError: PropTypes.string.isRequired,
}

export default ModalServerRegError;
import React from "react";
import PropTypes from 'prop-types'
import './Modal.scss'
// import { useDispatch } from "react-redux";
// import { addToCart, deleteFromCart } from "../../store/actionsCreator/actionsCreator";

function Modal(props)  { 

    const { closeSignUp, setModalOpen } = props


    // const {header, shouldClose, func, currentItem, modalType} = props

    // const dispatch = useDispatch()
    
    // let method;
    // let mainText;
    
    // if(modalType === 'addItem'){
    //     method = addToCart
    //     mainText = 'Are you sure you want to add this item to the cart?'
    // }else if (modalType === 'finish_reg'){
    //     method = finish_reg
    //     mainText = 'Are you sure you want to add this item to the cart?'
    // }
    // else{
    //     method = deleteFromCart
    //     mainText = 'Are you sure you want to delete this item from the cart?'
    // }
    // console.log(method)

    return(
        <div className = "modal active"  >
            <div className="modalContent">
            <div className="modalContentHeader" >
            <header className='modalHeader'> Wait! </header>
               
                </div>
            
            
            <p className='mainText'>Are you sure you want to cancel registration?</p>
            <div className='modal_buttons_div'>
             
            <button type='button' onClick={closeSignUp} className='modal_btn modal_btn--yes'>Yes</button>
            <button type='button' className="modal_btn modal_btn--no" onClick={()=>setModalOpen(false)}>No</button>
            </div>
           
            </div>
        </div>
    )

    
}

Modal.propTypes = {
    closeSignUp : PropTypes.func.isRequired,
    setModalOpen: PropTypes.bool.isRequired,
}


export default Modal;
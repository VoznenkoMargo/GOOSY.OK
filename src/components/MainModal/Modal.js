import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import errorImg from "../../assets/svg/error-10379.svg";
import successImg from "../../assets/svg/success-svgrepo-com.svg";

function Modal(props) {
  const {
    closeSignUp,
    setModalOpen,
    modalType,
    currentModalError: errorMessage,
    setModalServerRegOpen,
  } = props;

  let modalHeaderText;
  let modalMainText;
  let modalButtons;

  if (modalType === "cancelReg") {
    modalHeaderText = "Wait!";
    modalMainText = "Are you sure you want to cancel registration?";
    modalButtons = (
      <div className="modal_buttons_div">
        <button
          type="button"
          onClick={closeSignUp}
          className="modal_btn modal_btn--yes"
        >
          Yes
        </button>
        <button
          type="button"
          className="modal_btn modal_btn--no"
          onClick={() => setModalOpen(false)}
        >
          No
        </button>
      </div>
    );
  } else if (modalType === "errorLogin") {
    modalHeaderText = "Oooops!";
    modalMainText = "Wrong email or password:(";
    modalButtons = (
      <div className="modal_buttons_div">
        <img alt="success" width="40px" src={errorImg} />
      </div>
    );
  } else if (modalType === "successReg") {
    modalHeaderText = "Success!";
    modalMainText = "Regestration is successfull";
    modalButtons = (
      <div className="modal_buttons_div">
        <img alt="success" width="40px" src={successImg} />
      </div>
    );
  } else if (modalType === "errorReg") {
    modalHeaderText = "Error!";
    modalMainText = { errorMessage };
    modalButtons = (
      <div className="modal_buttons_div">
        <button
          type="button"
          className="modal_btn modal_btn--no"
          onClick={() => setModalServerRegOpen(false)}
        >
          Ok
        </button>
      </div>
    );
  }
  return (
    <div className="modal active">
      <div className="modalContent">
        <div className="modalContentHeader">
          <header className="modalHeader"> {modalHeaderText} </header>
        </div>
        <p className="mainText">{modalMainText}</p>
        {modalButtons}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  currentModalError: "Error",
  setModalServerRegOpen: () => {},
};

Modal.propTypes = {
  closeSignUp: PropTypes.func.isRequired,
  setModalOpen: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  currentModalError: PropTypes.string,
  setModalServerRegOpen: PropTypes.func,
};

export default React.memo(Modal);

/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import classNames from "classnames";
import Modal from "../MainModal/Modal";
import { sendRegData, sendLogInData, getUserData } from "../../axios";
import { saveToLS } from "../../utils/localStorage";
import styles from "./Form.module.scss";

function FormReg(props) {
  
  const { closeSignUp, setUserName } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const [modalServerRegOpen, setModalServerRegOpen] = useState(false);

  const [currentModalError, setCurrentModalError] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };
 

  const initialValues = {
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "At least 2 symbols")
      .max(24, "24 characters max")
      .matches(/^[aA-zZ\s]+$/, "Only Latin characters"),
    lastName: yup
      .string()
      .required("Second name is required")
      .min(2, "At least 2 symbols")
      .max(24, "24 characters max")
      .matches(/^[aA-zZ\s]+$/, "Only Latin characters"),
    login: yup
      .string()
      .required("Create login")
      .min(3, "At least 3 symbols")
      .max(10, "10 characters max")
      .matches(/[A-Za-z/s]/, "Only Latin characters"),
    email: yup.string().required("Email is required").email("Wrong email"),
    password: yup
      .string()
      .required("Reqire password")
      .min(7, "At least 7 symbols")
      .max(30, "30 characters max"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match!"),
  });

  document.body.style.overflow = "hidden";

  const hendleLogin = (userData) => {
    sendLogInData(userData)
      .then(({ data }) => {
        saveToLS("authToken", data.token);
        getUserData()
          .then(({ data }) => {
            saveToLS("userName", data.firstName);
            setUserName(data.firstName);
            closeSignUp();
          })
          .catch(() => {
          });
      })
      .catch(() => {
      });
  };

  const showErrorModal = (errorMessage) => {
    setModalServerRegOpen(true);
    setCurrentModalError(errorMessage);
  };

  const SignUp = (userData) => {
    sendRegData(userData)
      .then((response) => {
        hendleLogin({
          ...userData,
          loginOrEmail: userData.login,
          password: userData.password,
        });
      })
      .catch((error) => {
        showErrorModal(error.response.data.message);
      });
  };

  const handleSubmit = (userData) => {
    delete userData.confirmPassword;
    document.body.style.overflow = "unset";

    SignUp(userData);
  };

  return (
    <div className={styles.modal}>
      {modalServerRegOpen ? (<Modal modalType="errorReg" setModalServerRegOpen={setModalServerRegOpen} currentModalError={currentModalError}/>) : 
      ("")};
       {modalOpen ? (<Modal setModalOpen={setModalOpen} closeSignUp={closeSignUp} modalType='cancelReg' />) : ("")};
      <div
        id="formReg_modalContent"
        className={classNames(styles.modalContent, styles.modalContent_reg)}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur
        >
          {({ errors, touched, isValid, dirty }) => {
            return (
              <Form className={styles.form}>
                <div className={styles.form_header}>
                  <h2 className={styles.form_header_topic}> Sign Up! </h2>
                  <span
                    id="closeBtn"
                    onClick={() => {
                      openModal(closeSignUp);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => {}}
                    className={styles.form_header_closebtn}
                  >
                    x
                  </span>
                </div>

                <label htmlFor="firstName">
                  {" "}
                  First Name*
                  <Field
                    className={styles.form_input}
                    type="text"
                    name="firstName"
                    placeholder="Name"
                  />
                  <p className={styles.form_input_error}>
                    {touched.firstName && errors.firstName && errors.firstName}
                  </p>
                </label>

                <label htmlFor="secondName">
                  {" "}
                  Second Name*
                  <Field
                    className={styles.form_input}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <p className={styles.form_input_error}>
                    {touched.lastName && errors.lastName && errors.lastName}
                  </p>
                </label>

                <label htmlFor="login">
                  {" "}
                  Login*
                  <Field
                    className={styles.form_input}
                    type="text"
                    name="login"
                    placeholder="Login"
                  />
                  <p className={styles.form_input_error}>
                    {touched.login && errors.login && errors.login}
                  </p>
                </label>

                <label htmlFor="email">
                  {" "}
                  Email*
                  <Field
                    className={styles.form_input}
                    type="email"
                    name="email"
                    placeholder="youremail@smth.com"
                  />
                  <p className={styles.form_input_error}>
                    {touched.email && errors.email && errors.email}
                  </p>
                </label>

                <label htmlFor="password">
                  {" "}
                  Password*
                  <Field
                    className={styles.form_input}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <p className={styles.form_input_error}>
                    {touched.password && errors.password && errors.password}
                  </p>
                </label>

                <label htmlFor="confirmPassword">
                  Confirm password*
                  <Field
                    className={styles.form_input}
                    type="password"
                    name="confirmPassword"
                    placeholder="Repeat password"
                  />
                  <p className={styles.form_input_error}>
                    {touched.confirmPassword &&
                      errors.confirmPassword &&
                      errors.confirmPassword}
                  </p>
                </label>

                <label htmlFor="telephone">
                  {" "}
                  Your phone number
                  <Field
                    className={styles.form_input}
                    type="text"
                    name="telephone"
                    format="(###) ### ## ##"
                    placeholder="(000) 000 00 00 "
                    component={NumberFormat}
                  />
                </label>

                <div className={styles.form_bottom}>
                  <button
                    className={styles.form_submit_button}
                    disabled={!isValid && !dirty}
                    type="submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

  FormReg.propTypes = {
    closeSignUp: PropTypes.func.isRequired,
    setUserName: PropTypes.func.isRequired,
  };
export default FormReg;

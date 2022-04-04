/* eslint-disable no-shadow */
import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import classNames from "classnames";
import { saveToLS } from "../../utils/localStorage";
import { sendLogInData, getUserData } from "../../axios";
import styles from "./Form.module.scss";
import Modal from "../MainModal/Modal";

function FormLogin(props) {
  const { closeSignIn, setUserName } = props;

  const [modalErrorLoginOpen, setModalErrorLoginOpen] = useState(false);

  const ref = useRef();
  console.log(ref);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeSignIn();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  const initialValues = {
    loginOrEmail: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    loginOrEmail: yup
      .string()
      .required("This field is required")
      .min(2, "At least 2 symbols")
      .max(24, "24 characters max")
      .matches(/[A-Za-z/s]/, "Only Latin characters"),
    password: yup.string().required("Reqire password"),
  });

  document.body.style.overflow = "hidden";

  const showError = () => {
    setModalErrorLoginOpen(true);
    setTimeout(() => {
      setModalErrorLoginOpen(false);
    }, 1000);
  };
  const handleSubmit = (userData) => {
    document.body.style.overflow = "unset";

    sendLogInData(userData)
      .then(({ data }) => {
        saveToLS("authToken", data.token);
        closeSignIn();
        getUserData()
          .then(({ data }) => {
            saveToLS("userName", data.firstName);
            setUserName(data.firstName);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        showError();
      });
  };

  return (
    <div className={styles.modal}>
      <div
        ref={ref}
        className={classNames(styles.modalContent, styles.modalContent_login)}
      >
        <Formik
          initialValues={initialValues}
          closeSingIn={closeSignIn}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur
        >
          {({ errors, touched, isValid, dirty }) => {
            return (
              <Form className={classNames(styles.form, styles.form_login)}>
                <div className={styles.form_header}>
                  <h2 className={styles.form_header_topic}> Welcome Back! </h2>
                  <span
                    id="closeBtn"
                    onClick={closeSignIn}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => {}}
                    className={styles.form_header_closebtn}
                  >
                    x
                  </span>
                </div>

                <label htmlFor="loginOrEmail">
                  {" "}
                  Login or Email*
                  <Field
                    className={styles.form_input}
                    type="text"
                    name="loginOrEmail"
                    placeholder="login or Email"
                  />
                  {touched.loginOrEmail && errors.loginOrEmail && (
                    <p className={styles.form_input_error}>
                      {errors.loginOrEmail}
                    </p>
                  )}
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
                  {touched.password && errors.password && (
                    <p className={styles.form_input_error}>{errors.password}</p>
                  )}
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
      {modalErrorLoginOpen ? <Modal modalType="errorLogin" /> : ""};
    </div>
  );
}

FormLogin.propTypes = {
  closeSignIn: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default FormLogin;

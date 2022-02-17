import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import PropTypes from 'prop-types'
// import NumberFormat from "react-number-format";
// import axios from "axios";
import styles from './FormReg.module.scss'


function FormReg (props) {

    const { closeSignUp } = props;

    const initialValues = {
        loginOrEmail:'',
        password:'',
        
        

    }

    const validationSchema = yup.object().shape({
        loginOrEmail: yup.string()
            .required('This field is required')
            .min(2, 'Минимум 2 символа')
            .max(24, 'Максимум 24 символа')
            .matches(/[A-Za-z/s]/, 'Латиница онли'),
        password:yup.string()
            .required('Reqire password'),
       

    });

    // document.body.style.overflow = 'hidden'

   
    const handleKeyDown = ()=>{
        console.log('ok')
    }
    const handleSubmit = (newCustomer) => {
    console.log('pl')
     console.log(newCustomer);

     document.body.style.overflow = 'unset'

    //  axios.post("http://35.180.205.240:5000/api/customers", newCustomer)
	// .then(savedCustomer => {
    //     console.log(savedCustomer)})
	// .catch(err => {console.log(err)})
    }


    return (
    <div className = {styles.modal} >
        <div className={styles.modalContent}>
            <Formik initialValues={initialValues} handleKeyDown={handleKeyDown} closeSingIn={closeSignUp} onSubmit={handleSubmit} validationSchema={validationSchema} validateOnBlur>

                {({ errors, touched, isValid, dirty})=>{
                
                    
                    return (
                        
                    <Form className={styles.form}>
                        <div className={styles.form_header}>
                            <h2 className={styles.form_header_topic}> Welcome Back! </h2>
                            <span id='closeBtn'  onClick={closeSignUp} role='button' tabIndex={0} onKeyPress='' className={styles.form_header_closebtn}>x</span>
                        </div> 

                        <label htmlFor='loginOrEmail'> Login*
                            <Field className={styles.form_input} type='text' name='loginOrEmail' placeholder="loginOrEmail" />
                            {touched.loginOrEmail && errors.loginOrEmail && <p className={styles.form_input_error}>{errors.loginOrEmail}</p>}
                        </label>

                        <label htmlFor='password'> Password*
                            <Field className={styles.form_input}  type='password' name='password' placeholder="Password" />
                            {touched.password && errors.password && <p className={styles.form_input_error}>{errors.password}</p>}
                        </label>

                        <div className={styles.form_bottom}>
                            <button className={styles.form_submit_button} disabled={!isValid && !dirty}  type="submit"> Submit </button>
                        </div>
                    </Form>
                    )
                }}
                
            </Formik>
        </div>
    </div>
    )

    
    
}

FormReg.propTypes = {
    closeSignUp : PropTypes.func.isRequired,
}
export default FormReg;

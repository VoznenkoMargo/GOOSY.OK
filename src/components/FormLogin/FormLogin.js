import React, {useEffect, useRef} from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import PropTypes from 'prop-types'
// import NumberFormat from "react-number-format";
import axios from "axios";
import styles from './FormLogin.module.scss'
import { saveToLS } from "../../utils/localStorage";
import { sendLogInData } from "../../axios";



function FormLogin (props) {

    const { closeSignIn, setUserName } = props;


    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            closeSignIn()
            }
    
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
    
          document.removeEventListener("mousedown", checkIfClickedOutside)
    
        }
    
      }, [])


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
    const handleSubmit = (userData) => {
     document.body.style.overflow = 'unset'
    
    sendLogInData(userData)
    .then( ({ data }) => {
        console.log(data); 
       
        saveToLS('authToken', data.token); 
        // saveToLS('userName', userData.name); 

        axios.defaults.headers.common['Authorization'] = data.token
        axios.get("https://goos-ok.herokuapp.com/api/customers/customer")
        .then(({data}) => {console.log('done'); saveToLS('userName', data.firstName); setUserName(data.firstName)})
        .catch(err => {console.log(err)})
        

    })
	.catch(err => {console.log(err)})
    //  axios.post("https://goos-ok.herokuapp.com/api/customers/login", userData)
	
   
    closeSignIn()
    console.log("done")
    }


    return (
    <div className = {styles.modal} >
        <div ref={ref} className={styles.modalContent}>
            <Formik initialValues={initialValues} handleKeyDown={handleKeyDown} closeSingIn={closeSignIn} onSubmit={handleSubmit} validationSchema={validationSchema} validateOnBlur>

                {({ errors, touched, isValid, dirty})=>{
                
                    
                    return (
                        
                    <Form className={styles.form}>
                        <div className={styles.form_header}>
                            <h2 className={styles.form_header_topic}> Welcome Back! </h2>
                            <span id='closeBtn'  onClick={closeSignIn} role='button' tabIndex={0} onKeyPress={()=>{}} className={styles.form_header_closebtn}>x</span>
                        </div> 

                        <label htmlFor='loginOrEmail'> Login or Email*
                            <Field className={styles.form_input} type='text' name='loginOrEmail' placeholder="login or Email" />
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

FormLogin.propTypes = {
    closeSignIn : PropTypes.func.isRequired,
}
export default FormLogin;

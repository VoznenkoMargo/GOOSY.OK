import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import NumberFormat from "react-number-format";
import styles from './FormLogin.module.scss'


function FormLogin () {

    const initialValues = {
        firstName:'',
        lastName:'',
        login:'',
        email:'',
        password:'',
        confirmPassword:'',
        telephone:'',
        birthdate:'',
        gender:'',
        avatarUrl:'',

    }

    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .required('Enter your first name')
            .min(2, 'Минимум 2 символа')
            .max(24, 'Максимум 24 символа')
            .matches(/[A-Za-z/s]/, 'Латиница онли'),
        lastName: yup.string()
            .required('Enter please your second name')
            .min(2, 'Минимум 2 символа')
            .max(24, 'Максимум 24 символа')
            .matches(/[A-Za-z/s]/, 'Латиница онли'),
        login: yup.string()
            .required('Create login')
            .min(2, 'Минимум 2 символа')
            .max(24, 'Максимум 24 символа')
            .matches(/[A-Za-z/s]/, 'Латиница онли'),
        email: yup.string()
            .required('Enter your email')
            .email('Неправильный формат email'),
        password:yup.string()
            .required('Reqire password'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords dont match').required("Required"),

    });

    document.body.style.overflow = 'hidden'

    const handleClose = ()=>{ 
        console.log('close')
    }
    const handleKeyDown = ()=>{
        console.log('ok')
    }
    const handleSubmit = (value) => {
     console.log(value);
     document.body.style.overflow = 'unset'
    }
    return (
    <Formik initialValues={initialValues} handleKeyDown={handleKeyDown} handleClose={handleClose} onSubmit={handleSubmit} validationSchema={validationSchema} validateOnBlur>

        {({handleBlur, values, errors, touched, isValid, dirty})=>{
           
            
            return (
                
            <Form className={styles.form}>
                 <div className={styles.form_header}>
                     <h2 className={styles.form_header_topic}> Sign Up! </h2>
                     <span id='closeBtn' aria-hidden="true" onClick={handleClose} onKeyDown={handleKeyDown} className={styles.form_header_closebtn}>x</span>
                 </div> 

                <label htmlFor='firstName'> First Name* 
                    <Field className={styles.form_input} type='text'  name='firstName' placeholder="Name"  onBlur={handleBlur} value={values.firstName} />
                    {touched.firstName && errors.firstName && <p className={styles.form_input_error}>{errors.firstName}</p>}
                </label>

                <label htmlFor='secondName'> Second Name* 
                    <Field className={styles.form_input}  type='text' name='lastName' placeholder="Last Name" />
                    {touched.lastName && errors.lastName && <p className={styles.form_input_error}>{errors.lastName}</p>}
                </label>

                <label htmlFor='login'> Login*
                    <Field className={styles.form_input} type='text' name='login' placeholder="Login" />
                    {touched.login && errors.login && <p className={styles.form_input_error}>{errors.login}</p>}
                </label>

                <label htmlFor='email'> Email*
                    <Field className={styles.form_input} type='text' name='email' placeholder="youremail@smth.com" />
                    {touched.email && errors.email && <p className={styles.form_input_error}>{errors.email}</p>}
                </label>

                <label htmlFor='password'> Password*
                    <Field className={styles.form_input}  type='password' name='password' placeholder="Password" />
                    {touched.password && errors.password && <p className={styles.form_input_error}>{errors.password}</p>}
                </label>

                <label htmlFor='confirmPassword'>Confirm password*
                    <Field className={styles.form_input}  type='password' name='confirmPassword' placeholder="Repeat password" />
                    {touched.confirmPassword && errors.confirmPassword && <p className={styles.form_input_error}>{errors.confirmPassword}</p>}
                </label>

                <label htmlFor='telephone'> Your phone number
                    <Field className={styles.form_input}  type='text' name='telephone'  format="(###) ### ## ##" placeholder='(000) 000 00 00 ' component={NumberFormat}/>
                </label>

                <label htmlFor='birthdate'> Your birthdate
                    <Field className={styles.form_input}  type='text' name='birthdate' placeholder='(000) 000 00 00 ' component={NumberFormat}/>
                </label>


                <div className={styles.form_bottom}>
                    <button className={styles.form_submit_button} disabled={!isValid && !dirty}  type="submit"> Submit </button>
                </div>
            </Form>
            )
        }}
        
    </Formik>
    )

    
    
}
export default FormLogin;

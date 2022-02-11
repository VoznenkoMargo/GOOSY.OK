import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import styles from './FormLogin.module.scss'


function FormLogin () {

    const initialValues = {
        name:'',
        lastName:'',
        email:'',
        password:'',

    }

    const validationSchema = yup.object().shape({
        name:yup.string().required('Field is required!')
    })


    const handleSubmit = (values)=>{
    console.log(values)
    }
    return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {(props)=>{
            console.log(props)

            return (
            <Form className={styles.form}>
                <Field className={styles.form_input} type='text' name='name' placeholder="Name" />

                <Field className={styles.form_input}  type='text' name='lastName' placeholder="Last Name" />

                <Field className={styles.form_input} type='text' name='email' placeholder="youremail@smth.com" />

                <Field className={styles.form_input}  type='password' name='password' placeholder="Password" />

                <Field className={styles.form_input}  type='password' name='password' placeholder="Repeat password" />

                <button type="submit">Submit</button>
            </Form>
            )
        }}
        
    </Formik>
    )

    
    
}
export default FormLogin;

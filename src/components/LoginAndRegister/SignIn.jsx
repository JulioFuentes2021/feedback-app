import React, { useRef, useState } from "react";
import signIn from "@Axios/sign-in";
import FormContainer from "./FormContainer";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const signInButton = useRef(null)

    const [handleForm, setHandleForm] = useState(false)
    const [error, setError] = useState({ error: false, message: null, firstWord: null })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value)
        console.log(form.password.value)
        const token = document.cookie
        console.log(token)

        try {
            // const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
            // const { token } = await response.json()

            const response = await signIn({
                url: "/sign-in",
                data: {
                    username: form.username.value,
                    password: form.password.value,
                    mail: form.mail.value
                },

                // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjQ0N2UwMjU3MmU1NDY1NDI3ZGQ1NTEiLCJpYXQiOjE2NDg2NTU4NzV9.wrkbL-T0o3PIl8VaaWCPaLbxfqZoNUwigUX0NO5x8cU'
                // headers: { 'authorization': `Bearer ${token}` }
            })

            // .then(res => console.log("JAJA ha funcionado"))
            // .catch(err => setError(!error))
            // axios.post('http://localhost:8000/auth/login')


            // form.reset();
            navigate('/feedback-app/login')
        } catch (err) {
            setError({ ...error, error: true, message: err.response.data.message.replace(err.response.data.message.split(" ")[0], " "), firstWord: err.response.data.message.split(" ")[0] })
            console.log('Ha ocurrido un error', err.response)

        }
        // form.submit();
        // <Redirect to="/feedback-app" />


        // signIn({
        //     url: "/sign-in",
        //     data: {
        //         username: form.username.value,
        //         password: form.password.value,
        //         mail: form.mail.value
        //     },
        // })
        //     .then(() => navigate('/feedback-app/login'))
        //     .catch((error) => console.log(error.response))

    }


    return (
        <FormContainer containerName={"Sign In"} handleForm={handleForm} setHandleForm={setHandleForm}>
            <Form
                handleSubmit={handleSubmit}
                error={error}
                isSignIn={true}
                formName={"Sign In"}
            />
        </FormContainer>
    );
};

export default SignIn;

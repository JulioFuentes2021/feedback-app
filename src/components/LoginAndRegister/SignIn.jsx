import React, { useRef, useState } from "react";
import signIn from "@Axios/sign-in";
import FormContainer from "./FormContainer";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const signInButton = useRef(null)

    const [handleForm, setHandleForm] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value)
        console.log(form.password.value)
        const token = document.cookie
        console.log(token)

        try {
            await signIn({
                url: "/sign-in",
                data: {
                    username: form.username.value,
                    password: form.password.value,
                },

                // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjQ0N2UwMjU3MmU1NDY1NDI3ZGQ1NTEiLCJpYXQiOjE2NDg2NTU4NzV9.wrkbL-T0o3PIl8VaaWCPaLbxfqZoNUwigUX0NO5x8cU'
                headers: { 'authorization': `Bearer ${token}` }
            })

            // .then(res => console.log("JAJA ha funcionado"))
            // .catch(err => setError(!error))
            // axios.post('http://localhost:8000/auth/login')


            // form.reset();
            navigate('/feedback-app/index')
        } catch (error) {
            console.log('Ha ocurrido un error')
        }
        // form.submit();
        // <Redirect to="/feedback-app" />
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

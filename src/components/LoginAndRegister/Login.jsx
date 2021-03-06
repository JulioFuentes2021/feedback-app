import React, { useState, useContext } from "react";
import login from "@Axios/login";
import { useNavigate } from "react-router-dom";
import FormContainer from "./FormContainer";
import Form from "./Form";
import { FeedbackContext } from "../../context/context";

const Login = () => {
    const [handleForm, setHandleForm] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const context = useContext(FeedbackContext);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value);
        console.log(form.password.value);

        try {
            const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
            const { token } = await response.json()


            await login({
                url: "/login",
                data: {
                    // username: form.username.value,
                    password: form.password.value,
                    username: form.mail.value,
                },
                // headers: { 'authorization': `Bearer ${token}` }
            })
            form.reset();
            navigate('/feedback-app/index')
        } catch (error) {
            console.log('Error desde login', error)
        }
    };

    return (
        <FormContainer
            containerName={"Login"}
            handleForm={handleForm}
            setHandleForm={setHandleForm}
        >
            <Form
                handleSubmit={handleSubmit}
                error={error}
                isSignIn={false}
                formName={"Login"}
            />
        </FormContainer>
    );
};

export default Login;

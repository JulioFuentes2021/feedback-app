import React, { useState, useContext } from "react";
import login from "@Axios/login";
import { useNavigate } from "react-router-dom";
import FormContainer from "./FormContainer";
import Form from "./Form";
import { FeedbackContext } from "../../context/context";
import { io } from "socket.io-client";

const Login = () => {
    const [handleForm, setHandleForm] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { setSocket } = useContext(FeedbackContext);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value);
        console.log(form.password.value);

        try {
            // const response = await fetch('http://localhost:5000/api/v1/refresh', { credentials: 'include' })
            // const { token } = await response.json()


            await login({
                url: "/login",
                data: {
                    password: form.password.value,
                    username: form.mail.value,
                },
            })
            form.reset();

            const response = await fetch(`${import.meta.env.VITE_URL}/refresh`, { credentials: 'include' })
            const { token } = await response.json()

            const socket2 = io.connect("http://localhost:5000", {
                extraHeaders: {
                    Authorization: `Bearer ${token}`
                },
            });

            setSocket(socket2)

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

import React, { useState } from "react";
import signIn from "@Axios/sign-in";
import FormContainer from "./FormContainer";
import Form from "./Form";
import { useNavigate } from "react-router-dom";


const SignIn = () => {

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

            const response = await signIn({
                url: "/sign-in",
                data: {
                    username: form.username.value,
                    password: form.password.value,
                    mail: form.mail.value
                },
            })
            navigate('/feedback-app/login')
        } catch (err) {
            setError({ ...error, error: true, message: err.response.data.message.replace(err.response.data.message.split(" ")[0], " "), firstWord: err.response.data.message.split(" ")[0] })
            console.log('Ha ocurrido un error', err.response)

        }

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

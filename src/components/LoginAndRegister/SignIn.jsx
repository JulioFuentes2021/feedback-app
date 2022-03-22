import React, { useRef, useState } from "react";
import login from "@Axios/sign-in";
import FormContainer from "./FormContainer";
import Form from "./Form";
import axios from "axios";

const SignIn = () => {
    const signInButton = useRef(null)

    const [handleForm, setHandleForm] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value)
        console.log(form.password.value)

        login({
            url: "/sign-in",
            data: {
                username: form.username.value,
                password: form.password.value,
            },
        })
            .then(res => console.log("JAJA ha funcionado"))
            .catch(err => setError(!error))
        // axios.post('http://localhost:8000/auth/login')


        form.reset();
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

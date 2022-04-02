import React, { useState } from "react";
import login from "@Axios/login";
import FormContainer from "./FormContainer";
import Form from "./Form";

const Login = () => {
    const [handleForm, setHandleForm] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value);
        console.log(form.password.value);

        login({
            url: "/login",
            data: {
                username: form.username.value,
                password: form.password.value,
            },
        })
            // .then(res => console.log(res))
            .then(res => {
                // document.cookie = `token=${res.data.token}`
                // document.cookie = `name=${res.data.user.username}`
            })
            .catch(err => setError(!error));
        // axios.post('http://localhost:8000/auth/login')

        form.reset();
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

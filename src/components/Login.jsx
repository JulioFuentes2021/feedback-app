import React from "react";
import login from "../Axios/login";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        login({
            url: "/login",
            data: {
                username: form.username.value,
                password: form.password.value,
            },
        });
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} method="post" action="http://localhost:8000/auth/login">
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Password" name="password" />
            <button type="submit">Enviarf</button>
        </form>
    );
};

export default Login;

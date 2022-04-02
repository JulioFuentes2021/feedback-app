import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Login from './Login';
import SignIn from './SignIn';

const FormTemplate = () => {

    const navigate = useNavigate();

    useEffect(() => {
        try {
            const token = document.cookie.split("=")[1].split(";")[0]
            if (token) navigate('/feedback-app/index')
            console.log(token)
        } catch (error) {
            console.log('NO hay cookies')
        }
    }, [])

    return (
        <div className="w-full h-screen flex items-center justify-around">
            <Login />
            <SignIn />
        </div>
    )
}

export default FormTemplate
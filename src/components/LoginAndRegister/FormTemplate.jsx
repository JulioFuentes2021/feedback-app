import React from 'react'
import Login from './Login';
import SignIn from './SignIn';

const FormTemplate = () => {
    return (
        <div className="w-full h-screen flex items-center justify-around">
            <Login />
            <SignIn />
        </div>
    )
}

export default FormTemplate
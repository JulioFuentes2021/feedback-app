import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import React from 'react';
import Loading from '../Utilities/LOADING';

const FormTemplate = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [itIsLogin, setItIsLogin] = useState(false);

    useEffect(() => {
        const checkRefreshToken = async () => {
            const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
            const { token } = await response.json()
            setLoading(false)
            return response.ok
        };

        checkRefreshToken()
            .then(data => { if (data) setItIsLogin(!itIsLogin) })
            .catch(error => console.log('Se cumplio el error: ', error))
    }, [])

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center ">
            <Loading />
        </div>
    }

    return (
        <>
            {itIsLogin ? navigate('/feedback-app/index') : <div className="w-full h-screen flex flex-col items-center justify-center">
                <h2 className="text-center text-3xl my-10">Welcome to your Feedback Board</h2>
                <div className="">
                    <Link to="/feedback-app/login">
                        <span className="underline mx-10 text-2xl">Login</span>
                    </Link>
                    <Link to="/feedback-app/sign-in">
                        <span className="underline mx-10 text-2xl">Sign In</span>
                    </Link>
                </div>

            </div>}

        </>
    )
}

export default FormTemplate
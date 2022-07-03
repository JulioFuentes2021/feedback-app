import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import React from 'react';
import Login from './Login';
import SignIn from './SignIn';
import Index from '../../pages/index';
import Loading from '../Utilities/LOADING';
// import LOADING from '../Utilities/LOADING';

const FormTemplate = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [itIsLogin, setItIsLogin] = useState(false);

    useEffect(() => {
        // const refresh = fetch('http://localhost:5000/refresh', { method: 'get', credentials: 'include' })
        //     .then(data => data.json())
        //     // .then(data1 => navigate('/feedback-app/index'))
        //     .catch(error => console.log(error))

        // if (refresh) {
        //     navigate('/feedback-app/index')
        // }


        const checkRefreshToken = async () => {
            const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
            // if (response.status === 401) throw new Error("Refresh token doesn't exist")
            // navigate('/feedback-app/index')
            const { token } = await response.json()
            // setItIsLogin(false)
            console.log('res', token)
            setLoading(false)
            console.log(response.ok)
            return response.ok
        };

        checkRefreshToken()
            .then(data => { if (data) setItIsLogin(!itIsLogin) })
            .catch(error => console.log('Se cumplio el error: ', error))


        // const run = async () => {
        //     try {
        //         await checkRefreshToken()
        //     } catch (error) {
        //         setLoading(false)
        //         console.log('Se cumplio el error', error)
        //     }
        // }

        // run()


        // console.log(document.cookies)
        // const token = document.cookie.split(" ")[1]
        // if (token) navigate('/feedback-app/index')
        // console.log(token)

    }, [])

    // if(itIsLogin) {
    //     return 
    // }

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center ">
            <Loading />
        </div>
    }

    return (
        <>
            {itIsLogin ? navigate('/feedback-app/index') : <div className="w-full h-screen flex flex-col items-center justify-center">
                {/* <Login itIsLogin={itIsLogin} setItIsLogin={setItIsLogin} />
                <SignIn /> */}
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
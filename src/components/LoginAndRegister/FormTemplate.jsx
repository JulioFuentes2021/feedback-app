import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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

    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center ">
            <Loading />
        </div>
    }

    return (
        <>
            {itIsLogin ? <Index /> : <div className="w-full h-screen flex items-center justify-around">
                <Login itIsLogin={itIsLogin} setItIsLogin={setItIsLogin} />
                <SignIn />
            </div>}

        </>
    )
}

export default FormTemplate
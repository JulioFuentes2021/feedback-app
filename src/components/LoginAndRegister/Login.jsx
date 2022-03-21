// import React from "react";
// import login from "@Axios/login";

// const Login = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         login({
//             url: "/login",
//             data: {
//                 username: form.username.value,
//                 password: form.password.value,
//             },
//         });
//         form.reset();
//     }

//     return (
//         <form onSubmit={handleSubmit} method="post" action="http://localhost:8000/auth/login">
//             <input type="text" placeholder="Username" name="username" />
//             <input type="text" placeholder="Password" name="password" />
//             <button type="submit">Enviarf</button>
//         </form>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import login from "@Axios/login";

const Login = () => {
    const [handleForm, setHandleForm] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.username.value)
        console.log(form.password.value)

        login({
            url: "/login",
            data: {
                username: form.username.value,
                password: form.password.value,
            },
        }).catch(err => setError(!error))
        // axios.post('http://localhost:8000/auth/login')


        form.reset();
        // form.submit();
        // <Redirect to="/feedback-app" />
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <button onClick={() => setHandleForm(!handleForm)} className="bg-purple-600 text-white px-6 py-3 font-semibold rounded-xl">
                Login
            </button>
            {" "}
            <div className={`${!handleForm ? "w-0 h-0 rounded-bl-full rounded-tl-2xl rounded-br-2xl" : "w-full h-screen"} top-0 right-0 transition-w ease-in-out duration-700 flex items-center absolute bg-gray-800 overflow-hidden`}>

                <div className="absolute flex items-start justify-end w-full h-screen">
                    <button onClick={() => setHandleForm(!handleForm)} className="p-8 text-white text-xl">Exit</button>
                </div>
                <form
                    className={`w-full m-auto flex flex-col items-center bg-gray-800 text-white p-4 sticky z-50`}
                    method="post"
                    action="http://localhost:8000/sign-in"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <p className={`${error ? "visible" : "invisible"} text-xl text-red-500`}>Username or password incorrect</p>
                    {" "}
                    <input
                        className="max-w-xl outline-none w-full p-2 my-2 bg-transparent border-b border-white focus:border-purple-800 transition-b ease duration-2000"
                        type="text"
                        placeholder="Username"
                        name="username"
                        autoFocus
                        required
                    // value="Ronaldo"
                    />
                    {" "}
                    <input
                        className="max-w-xl outline-none w-full p-2 my-2 bg-transparent border-b border-white focus:border-purple-800 transition-b ease duration-2000"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                    // value="canales"
                    />
                    <button className="max-w-xl my-5 bg-purple-800 w-full p-3 hover:bg-purple-900" type="submit">Login</button>
                </form>
            </div>
        </div >
    );
};


export default Login

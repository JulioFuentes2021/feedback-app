import React from 'react'

const Form = ({ handleSubmit, error, isSignIn, formName }) => {
    return (
        <form
            className={`w-full m-auto flex flex-col items-center bg-gray-800 text-white p-4 sticky z-50`}
            method="post"
            action="http://localhost:8000/sign-in"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {isSignIn && <p className={`${error ? "visible" : "invisible"} text-xl text-red-500`}>Username or password incorrect</p>}
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
            <button className="max-w-xl my-5 bg-purple-800 w-full p-3 hover:bg-purple-900" type="submit">{formName}</button>
        </form>
    )
}

export default Form
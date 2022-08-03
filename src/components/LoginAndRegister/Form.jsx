import React from "react";

const Form = ({ handleSubmit, error, isSignIn, formName }) => {
    return (
        <form
            className={`w-full m-auto flex flex-col items-center bg-gray-800 text-white p-4 sticky z-50`}
            method="post"
            action={`${URL}/sign-in`}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {
                <p
                    className={`${error.error ? "visible" : "invisible"
                        } text-center mb-8 text-xl text-red-500`}
                >
                    <span className="text-green-500 uppercase">{error.firstWord}</span>{" "}
                    {error.message}
                </p>
            }{" "}
            <div className="overflow-hidden flex flex-col items-center justify-center bg-gray-200 w-72 h-72 min-w-[19rem] max-w-xs rounded-full cursor-pointer">
                <div className="text-xl text-black relative top-16 m-auto">
                    Click here to add avatar
                </div>
                <div className="translate-y-8 rounded-full w-20 h-20 bg-gray-300 my-8"></div>
                <div className="translate-y-8 rounded-full w-56 h-44 bg-gray-300"></div>
            </div>
            <input
                className="max-w-xl outline-none w-full p-2 my-2 bg-transparent border-b border-white focus:border-purple-800 transition-b ease duration-2000"
                type="text"
                placeholder="Username"
                name="username"
                autoFocus
                required
            />
            <input
                className="max-w-xl outline-none w-full p-2 my-2 bg-transparent border-b border-white focus:border-purple-800 transition-b ease duration-2000"
                type="text"
                placeholder="Mail"
                name="mail"
                autoFocus
                required
            />{" "}
            <input
                className="max-w-xl outline-none w-full p-2 my-2 bg-transparent border-b border-white focus:border-purple-800 transition-b ease duration-2000"
                type="password"
                placeholder="Password"
                name="password"
                required
            />
            <button
                className="max-w-xl my-5 bg-purple-800 w-full p-3 hover:bg-purple-900"
                type="submit"
            >
                {formName}
            </button>
        </form>
    );
};

export default Form;

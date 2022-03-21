import React from 'react'

const FormContainer = ({ children, setHandleForm, handleForm, containerName }) => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <button onClick={() => setHandleForm(!handleForm)} className="bg-purple-600 text-white px-6 py-3 font-semibold rounded-xl">
                {containerName}
            </button>
            {" "}
            <div className={`${!handleForm ? "w-0 h-0 rounded-bl-full rounded-tl-2xl rounded-br-2xl" : "w-full h-screen"} top-0 right-0 transition-w ease-in-out duration-700 flex items-center absolute bg-gray-800 overflow-hidden`}>

                <div className="absolute flex items-start justify-end w-full h-screen">
                    <button onClick={() => setHandleForm(!handleForm)} className="p-8 text-white text-xl">Exit</button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default FormContainer;
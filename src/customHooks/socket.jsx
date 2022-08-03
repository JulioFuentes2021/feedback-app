import React, { useState, useContext, useEffect } from 'react'
import { FeedbackContext } from '../context/context';
import { io } from "socket.io-client";


const useSocket = () => {

    const { socket, setSocket } = useContext(FeedbackContext);
    const setConnection = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/refresh`, { credentials: 'include' })
            const { token } = await response.json()

            const socket2 = io.connect("http://localhost:5000", {
                extraHeaders: {
                    Authorization: `Bearer ${token}`
                },
            });

            setSocket(socket2)
            // return socket2
        } catch (error) {
            console.log(error)
            const response = await fetch(`${import.meta.env.VITE_URL}/refresh`, { credentials: 'include' })
            const { token } = await response.json()

            const socket2 = io.connect("http://localhost:5000", {
                extraHeaders: {
                    Authorization: `Bearer ${token}`
                },
            });

            setSocket(socket2)
        }
    }

    useEffect(() => {
        console.log('Socket connection !!!')
        setConnection();
    }, [])

    return [socket, setConnection];
}

export default useSocket
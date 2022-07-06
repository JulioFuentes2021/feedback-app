import React, { useState, useContext, useEffect } from 'react'
import { FeedbackContext } from '../context/context';
import { io } from "socket.io-client";


const useSocket = () => {

    const { socket, setSocket } = useContext(FeedbackContext);
    const setConnection = async () => {
        try {
            const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
            const { token } = await response.json()

            const socket2 = io.connect("http://localhost:5000", {
                extraHeaders: {
                    Authorization: `Bearer ${token}`
                },
                // reconnect: true,
                // 'multiplex': false
            });

            setSocket(socket2)
            return socket2
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setConnection();

        // if (!socket) {
        //     console.log('Ejecutando')
        //     setConnection();
        // }
    }, [])

    return [socket, setConnection];
}

export default useSocket
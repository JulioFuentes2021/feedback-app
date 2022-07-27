import { useState, createContext, useEffect } from "react";
import { io } from "socket.io-client";

export const FeedbackContext = createContext();

const context = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [sortBy, setSortBy] = useState("/all");

    useEffect(() => {
        const setConnection = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/refresh', { credentials: 'include' })
                const { token } = await response.json()

                const socket2 = io.connect("http://localhost:5000", {
                    extraHeaders: {
                        Authorization: `Bearer ${token}`
                    },
                });

                setSocket(socket2)
            } catch (error) {
                console.log(error)
            }
        }

        setConnection()
    }, [])

    return (
        <FeedbackContext.Provider value={{ socket, setSocket, sortBy, setSortBy }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export default context;

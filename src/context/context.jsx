import { useState, createContext } from "react";

export const FeedbackContext = createContext();

const context = ({ children }) => {
    const [socket, setSocket] = useState(null);

    return (
        <FeedbackContext.Provider value={{ socket, setSocket }}>
            {children}
        </FeedbackContext.Provider>
    )
};

export default context;

import { useState, createContext } from "react";

export const FeedbackContext = createContext();

const context = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [sortBy, setSortBy] = useState("/all");

    return (
        <FeedbackContext.Provider value={{ socket, setSocket, sortBy, setSortBy }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export default context;

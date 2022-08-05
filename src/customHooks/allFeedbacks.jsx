import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FeedbackContext } from '../context/context';

const setAllFeedbacks = () => {
    const [data, setData] = useState([]);
    const { sortBy, setSuggestions } = useContext(FeedbackContext)

    const getFeedbacks = async (t) => {
        try {
            const data = await axios.get(`${import.meta.env.VITE_URL}/feedback${t || sortBy}`);
            setData(data.data);
            setSuggestions(data.data.length)

        } catch (error) {
            console.log('Aqui esta el error')
            console.log(error)
        }
    }

    const updateData = (newData) => {
        setData(newData);
    };

    useEffect(() => {
        getFeedbacks()
    }, [sortBy]);

    return [data, getFeedbacks, updateData]
}

export default setAllFeedbacks

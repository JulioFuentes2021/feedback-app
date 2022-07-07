import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FeedbackContext } from '../context/context';

const setAllFeedbacks = () => {
    const [data, setData] = useState([]);
    const { sortBy } = useContext(FeedbackContext)

    const getFeedbacks = async () => {
        try {
            const data = await axios.get(`http://localhost:5000/feedback/${sortBy || 'all'}`);
            setData(data.data);

        } catch (error) {
            console.log('Aqui esta el error')
            console.log(error)
        }
    }

    useEffect(() => {
        getFeedbacks()
    }, [sortBy]);

    return [data, getFeedbacks]
}

export default setAllFeedbacks
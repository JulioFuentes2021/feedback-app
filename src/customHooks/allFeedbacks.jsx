import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FeedbackContext } from '../context/context';

const setAllFeedbacks = () => {
    const [data, setData] = useState([]);
    const { sortBy } = useContext(FeedbackContext)

    const getFeedbacks = async (t) => {
        try {
            const data = await axios.get(`http://localhost:5000/api/v1/feedback${t || sortBy}`);
            setData(data.data);


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

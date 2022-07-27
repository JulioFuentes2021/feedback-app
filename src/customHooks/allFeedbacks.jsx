import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FeedbackContext } from '../context/context';

const setAllFeedbacks = () => {
    const [data, setData] = useState([]);
    const { sortBy } = useContext(FeedbackContext)

    const getFeedbacks = async (t) => {
        try {
            // console.log(`http://localhost:5000/feedback${t}`)
            console.log('SORTBY ', sortBy)
            const data = await axios.get(`http://localhost:5000/feedback${t || sortBy}`);
            setData(data.data);
            console.log('Ejecutandose')

        } catch (error) {
            console.log('Aqui esta el error')
            console.log(error)
        }
    }

    const updateData = (newData) => {
        setData(newData);
    };

    useEffect(() => {
        console.log('ajaja', sortBy)
        getFeedbacks()
    }, [sortBy]);

    return [data, getFeedbacks, updateData]
}

export default setAllFeedbacks

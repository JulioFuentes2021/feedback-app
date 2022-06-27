import React, { useEffect, useState } from 'react'
import AddComment from '../components/Comments/AddComment';
import CommentComponent from '../components/Comments/Comment';
import CommentsBar from '../components/Comments/CommentsBar';
import FeedbackCard from "../components/FeedbackCard/FeedbackCard";
import { useParams } from 'react-router-dom';
import { sockets } from '../socket/index';

const Comment = () => {
    const { id } = useParams();
    const [feedback, setFeedback] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const getComments = async (commentId) => {
            const response = await fetch(`http://localhost:5000/feedback/comment/${id}`)
            const data = await response.json();
            setFeedback(data.feedback);
            console.log(data)
        }

        getComments()
        // sockets.emit("getSuggestions", id)
        // sockets.on("receiveSuggestions", (data) => {
        //     console.log('Data', data)
        // })

        sockets.on("receiverSuggestions", () => {
            getComments();
        })

    }, [])

    return (
        <div className="flex flex-col justify-between h-screen">
            {/* <h1>{id}</h1> */}
            <FeedbackCard
                title={feedback.title}
                feature={feedback.feature}
                description={feedback.description}
                upvotes={feedback.upvotes}
                users={12}
                key={feedback._id}
                id={feedback._id}
            />
            <div className="flex justify-center flex-col">
                {/* <div className="px-10">
                    <CommentComponent />
                </div>
                <div className="pl-20">
                    <CommentComponent />
                </div>
                <div className="pl-20">
                    <CommentComponent />
                </div> */}
                <CommentsBar total={Object.keys(feedback).length && Object.keys(feedback.comment).length} />
                {
                    Object.keys(feedback).length && Object.keys(feedback.comment).length ? feedback.comment.map((comment) => (
                        <div className="w-full flex flex-col" key={comment._id}>
                            <CommentComponent text={comment.text} />
                        </div>
                    )) : <span className="text-3xl">No comments</span>
                }

            </div>
            <div className="w-full pt-4">
                <AddComment feedbackId={feedback._id} />
            </div>
        </div>
    )
}

export default Comment
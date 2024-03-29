import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AddComment from "../components/Comments/AddComment";
import CommentComponent from "../components/Comments/Comment";
import CommentsBar from "../components/Comments/CommentsBar";
import FeedbackCard from "../components/FeedbackCard/FeedbackCard";
import { useParams } from "react-router-dom";
import Back from '@Utilities/Back';
import useSocket from "../customHooks/socket";
import { FeedbackContext } from "../context/context";

const Comment = () => {
    const { id } = useParams();
    const [feedback, setFeedback] = useState({});
    const [reply, setReply] = useState(false);
    const [replyId, setReplyId] = useState();
    const [mail, setMail] = useState();
    const { socket } = useContext(FeedbackContext);
    // const [socket] = useSocket();

    useEffect(() => {
        const getComments = async commentId => {
            const response = await fetch(
                `${import.meta.env.VITE_URL}/feedback/comment/${id}`
            );
            const data = await response.json();
            setFeedback(data[0]);
            console.log(data);
        };

        if (!feedback.length) {
            getComments();
        }

        if (socket) {
            socket.on("receiverSuggestions", data => {
                getComments();
            })

            // socket.on("justUpvote", () => {
            //     getComments();
            // })
        }
    }, [socket]);


    return (
        <div className="flex flex-col justify-between h-screen sm:px-20">
            <div className="flex justify-between items-center px-5">
                <Back />
                <Link to={`/feedback-app/edit/${feedback._id}`}>
                    <button
                        type="button"
                        className="p-3 h-12 w-48 cursor-pointer rounded-xl text-white font-semibold hover:bg-purple-600 outline-none bg-purple-700"
                    >
                        Edit Feedback
                    </button>
                </Link>
            </div>
            <div className="mx-6 sm:mx-0">
                <FeedbackCard
                    title={feedback.title}
                    feature={feedback.feature}
                    description={feedback.description}
                    upvotes={feedback.upvotes}
                    users={12}
                    comments={feedback.commentsLength}
                    key={feedback._id}
                    id={feedback._id}
                />
            </div>
            <div className="flex justify-center flex-col">
                <CommentsBar
                    total={
                        // Object.keys(feedback).length && Object.keys(feedback.comment).length
                        feedback?.commentsLength || 0
                    }
                />
                {Object.keys(feedback).length &&
                    Object.keys(feedback.comment).length ? (
                    feedback.comment.map(comment => (
                        <div className="bg-white" key={comment._id}>
                            <CommentComponent
                                id={comment._id}
                                reply={reply}
                                setReply={setReply}
                                replyId={replyId}
                                setReplyId={setReplyId}
                                text={comment.text}
                                username={comment.creator}
                                mail={comment.mail}
                                getUserMail={setMail}
                            />
                            <div>
                                {
                                    comment.replies.map(replies => (
                                        <div className="pl-20" key={replies._id}>
                                            <CommentComponent
                                                id={comment._id}
                                                reply={reply}
                                                setReply={setReply}
                                                replyId={replyId}
                                                setReplyId={setReplyId}
                                                text={replies.text}
                                                username={replies.creator}
                                                mail={replies.mail}
                                                getUserMail={setMail}
                                                IsItReplly={true}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                ) : (
                    <span className="text-3xl">No comments</span>
                )}
            </div>
            <div className="w-full pt-4">
                <AddComment mail={mail} feedbackId={feedback._id} reply={reply} replyId={replyId} socket={socket} />
            </div>
        </div>
    );
};

export default Comment;

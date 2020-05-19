import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

export default ({
  trackId,
  currentUser,
  comments,
  fetchTrackComments,
  createComment,
}) => {
  const [body, setBody] = useState("");
  const [cmt, setCmt] = useState(null);

  console.log(currentUser.avatar);

  let avatar = null;
  if (currentUser.avatar) {
    avatar = <img src={`${currentUser.avatar}`} />;
  }

  useEffect(() => {
    if (!cmt) {
      fetchTrackComments(trackId).then((res) => {
        setCmt(res.comments);
      });
    }
  });

  const handleInput = (e) => {
    e.preventDefault();
    setBody(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      track_id: trackId,
      body,
    };
    createComment(comment);
    fetchTrackComments(trackId);
    setBody("");
  };

  const commentsList = comments.map((comment) => (
    <CommentItem key={comment.id} comment={comment} currentUser={currentUser} />
  ));

  return (
    <div className="comments">
      <div className="error-list big"></div>
      <div className="comment-form-wrapper">
        <div className="comment-form-user-avatar">{avatar}</div>
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            className="comment-input"
            type="text"
            value={body}
            onChange={handleInput}
            placeholder="Write a comment"
          />
        </form>
      </div>
      <div className="comments-list">{commentsList}</div>
    </div>
  );
};

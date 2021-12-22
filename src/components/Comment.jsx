import React from "react";
import moment from "moment";
import "./_comment.scss";
const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  return (
    <div className="p-2 comment d-flex">
      <img
        src={
          authorProfileImageUrl ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        }
        alt=""
        className="mr-3 rounded-circle"
      />
      <div className="comment__body">
        <p className="mb-1 comment__header">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;

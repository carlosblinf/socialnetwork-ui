import React from 'react';
import { fullName, toRelativeTime } from '../../../../utils/infoUtils';
import { Comment } from '../../../../utils/types';

type CommentCardProps = {
  comment: Comment;
};
function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="comment">
      <img src={comment.author.avatar} alt="avatar" />
      <div className="commentContent">
        <div>{fullName(comment.author)}</div>
        <div>{comment.text}</div>
      </div>
      <span className="date">{toRelativeTime(comment.date)}</span>
    </div>
  );
}

export default CommentCard;

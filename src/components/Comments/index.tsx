import React from 'react';
import WriteComment from '../WriteComment';
import './Comments.scss';
import CommentCard from './components/CommentCard';
import { comments } from '../../store/data';

function Comments() {
  return (
    <div className="commemts">
      <div className="containerComment">
        <WriteComment />
        {comments.map((com) => (
          <CommentCard key={com.id} comment={com} />
        ))}
      </div>
    </div>
  );
}

export default Comments;

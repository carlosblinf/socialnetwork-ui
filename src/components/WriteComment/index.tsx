import React from 'react';
import { useAuth } from '../../contex/AuthContext';
import './WriteComment.scss';

function WriteComment() {
  const { authUser } = useAuth();

  return (
    <div className="write">
      <img src={authUser?.avatar} alt="profile" />
      <textarea />
      <button type="button">send</button>
    </div>
  );
}

export default WriteComment;

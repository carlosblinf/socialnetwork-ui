import React from 'react';
import { useAuth } from '../../contex/AuthContext';
import './UserCard.scss';

function UserCard() {
  const { authUser } = useAuth();

  return (
    <div className="user cardW">
      <img src={authUser?.avatar} alt="info" />
      <div className="info">
        <div>{authUser?.firstName}</div>
        <span>@{authUser?.username}</span>
      </div>
    </div>
  );
}

export default UserCard;

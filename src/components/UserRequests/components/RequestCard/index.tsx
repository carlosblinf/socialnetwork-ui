import React from 'react';
import { OnlineUser } from '../../../../utils/types';

type RequestCardProps = {
  requestId: number;
  user: OnlineUser;
};

function RequestCard({ requestId, user }: RequestCardProps) {
  function acceptRequest() {
    console.log(requestId);
  }

  function declineRequest() {
    console.log(requestId);
  }
  return (
    <>
      <div className="info">
        <img src={user.avatar} alt="user request" />
        <span>
          <b>{`${user.firstName} ${user.lastName}`}</b> wants to add you to
          friends
        </span>
      </div>
      <div className="buttons">
        <button type="button" onClick={acceptRequest}>
          Accept
        </button>
        <button type="button" onClick={declineRequest}>
          Decline
        </button>
      </div>
    </>
  );
}

export default RequestCard;

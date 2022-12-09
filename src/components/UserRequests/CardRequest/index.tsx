import React from 'react';

type UserRequest = {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
};
type CardRequestProps = {
  requestId: number;
  user: UserRequest;
};

function CardRequest({ requestId, user }: CardRequestProps) {
  function acceptRequest() {
    console.log(requestId);
  }

  function declineRequest() {
    console.log(requestId);
  }
  return (
    <>
      <div className="info">
        <img src={user.imageUrl} alt="user request" />
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

export default CardRequest;

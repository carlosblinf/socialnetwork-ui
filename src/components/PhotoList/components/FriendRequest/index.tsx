import React from 'react';
import { requests } from '../../../UserRequests';
import RequestCard from '../../../UserRequests/components/RequestCard';
import './FriendRequest.scss';

function FriendRequest() {
  return (
    <div className="friendRequest">
      {requests?.map((req) => (
        <div key={req.id} className="requestCard card">
          <RequestCard requestId={req.id} user={req.user} />
        </div>
      ))}
      {!requests && <span>No request</span>}
    </div>
  );
}

export default FriendRequest;

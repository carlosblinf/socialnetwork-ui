import React from 'react';
import RequestCard from '../../../UserRequests/components/RequestCard';
import { requests } from '../../../../store/data';
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

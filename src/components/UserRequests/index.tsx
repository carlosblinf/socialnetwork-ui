import { requests } from '../../store/data';
import RequestCard from './components/RequestCard';
import './UserRequest.scss';

function UserRequest() {
  return (
    <>
      {requests?.slice(0, 2).map((req) => (
        <div key={req.id} className="requestCard cardW">
          <RequestCard requestId={req.id} user={req.user} />
        </div>
      ))}
      {!requests && <span>No request</span>}
    </>
  );
}

export default UserRequest;

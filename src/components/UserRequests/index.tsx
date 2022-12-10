import RequestCard from './RequestCard';
import './UserRequest.scss';

function UserRequest() {
  const requests = [
    {
      id: 1,
      userId: 2,
      user: {
        id: 2,
        firstName: 'Tyrell',
        lastName: 'Barrows',
        avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
      },
    },
    {
      id: 2,
      userId: 3,
      user: {
        id: 3,
        firstName: 'Ana',
        lastName: 'Valerion',
        avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      },
    },
  ];
  return (
    <>
      {requests?.map((req) => (
        <div key={req.id} className="card">
          <RequestCard requestId={req.id} user={req.user} />
        </div>
      ))}
      {!requests && <span>No request</span>}
    </>
  );
}

export default UserRequest;

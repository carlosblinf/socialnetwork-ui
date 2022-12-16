import RequestCard from './components/RequestCard';
import './UserRequest.scss';

export const requests = [
  {
    id: 1,
    userId: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
    user: {
      id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
      firstName: 'Tyrell',
      lastName: 'Barrows',
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
  },
  {
    id: 2,
    userId: 'a3f1d345-a03e-44be-8a3c-be6f3d9b94as',
    user: {
      id: 'a3f1d345-a03e-44be-8a3c-be6f3d9b94as',
      firstName: 'Ana',
      lastName: 'Valerion',
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
  },
  {
    id: 3,
    userId: 'c7f1d345-a03e-44be-8a3c-be6f3d9b94a3',
    user: {
      id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b94a3',
      firstName: 'Miles',
      lastName: 'Cummerata',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
  },
  {
    id: 4,
    userId: 'a3f3d345-a03e-44be-8a3c-be6f3d9b94e2',
    user: {
      id: 'a3f3d345-a03e-44be-8a3c-be6f3d9b94e2',
      firstName: 'Oleta',
      lastName: 'Abbott',
      avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    },
  },
];

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

import OnlineFriendCard from './OnlineFriendCard';
import './OnlineFriends.scss';

export const onlines = [
  {
    id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
    firstName: 'Tyrell',
    lastName: 'Barrows',
    username: 'tbarrow',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    countMessage: 2,
    communFriends: 208,
  },
  {
    id: 'af88b4a4-9be8-4f82-bea3-48c0cf03e71a',
    firstName: 'Alison',
    lastName: 'Reichert',
    username: 'areichert',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    countMessage: 0,
    communFriends: 0,
  },
  {
    id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b94a3',
    firstName: 'Miles',
    lastName: 'Cummerata',
    username: 'mcummerata',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    countMessage: 3,
    communFriends: 30,
  },
  {
    id: 'a3f1d345-a03e-44be-8a3c-be6f3d9b94as',
    firstName: 'Ana',
    lastName: 'Valerion',
    username: 'avalerion',
    avatar: 'https://randomuser.me/api/portraits/women/59.jpg',
    countMessage: 0,
    communFriends: 0,
  },
  {
    id: 'a3f3d345-a03e-44be-8a3c-be6f3d9b94e2',
    firstName: 'Oleta',
    lastName: 'Abbott',
    username: 'oabbott',
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    countMessage: 0,
    communFriends: 1852,
  },
  {
    id: '3f1d345-a03e-44be-8a3c-be6f3d9be8af5',
    firstName: 'Ewell',
    lastName: 'Mueller',
    username: 'emueller',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
    countMessage: 0,
    communFriends: 3,
  },
  {
    id: 'f1d345-a03e-44be-8a3c-be6f3d9b9ca8e5',
    firstName: 'Eleanora',
    lastName: 'Price',
    username: 'eprice',
    avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
    countMessage: 0,
    communFriends: 5,
  },
];

function OnlineFriends() {
  return (
    <div className="container cardW">
      {onlines?.map((user) => (
        <div key={user.id} className="itemFriend">
          <OnlineFriendCard user={user} />
        </div>
      ))}
      {!onlines && <span>No friends online</span>}
    </div>
  );
}

export default OnlineFriends;

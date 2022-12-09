import CardFriend from './CardFriend';
import './friends.scss';

export const onlines = [
  {
    id: 2,
    firstName: 'Tyrell',
    lastName: 'Barrows',
    imageUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
    countMessage: 2,
  },
  {
    id: 3,
    firstName: 'Alison',
    lastName: 'Reichert',
    imageUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
    countMessage: 0,
  },
  {
    id: 4,
    firstName: 'Miles',
    lastName: 'Cummerata',
    imageUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
    countMessage: 3,
  },
  {
    id: 5,
    firstName: 'Ana',
    lastName: 'Valerion',
    imageUrl: 'https://randomuser.me/api/portraits/women/59.jpg',
    countMessage: 0,
  },
  {
    id: 6,
    firstName: 'Oleta',
    lastName: 'Abbott',
    imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
    countMessage: 0,
  },
  {
    id: 7,
    firstName: 'Ewell',
    lastName: 'Mueller',
    imageUrl: 'https://randomuser.me/api/portraits/men/58.jpg',
    countMessage: 0,
  },
  {
    id: 8,
    firstName: 'Eleanora',
    lastName: 'Price',
    imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
    countMessage: 0,
  },
];

function Friends() {
  return (
    <div className="container">
      {onlines?.map((user) => (
        <div key={user.id} className="itemFriend">
          <CardFriend user={user} />
        </div>
      ))}
      {!onlines && <span>No friends online</span>}
    </div>
  );
}

export default Friends;

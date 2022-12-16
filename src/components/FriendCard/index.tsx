import React, { useEffect, useState } from 'react';
import './FriendCard.scss';
import { BiDotsVertical } from 'react-icons/bi';
import { onlines } from '../OnlineFriends';
import { OnlineUser } from '../../utils/types';

type FriendProps = {
  filter: 'allfriends' | 'recently' | 'followers' | 'friendrequest';
};

function FriendCard({ filter }: FriendProps) {
  const [users, setUsers] = useState<OnlineUser[]>([]);

  let filterFirstName: string = filter === 'recently' ? 'a' : '';
  let filterLastName: string = filter === 'followers' ? 'b' : '';
  let filterUserName: string = filter === 'friendrequest' ? 'c' : '';

  let friendList = onlines.filter(
    (friend) =>
      friend.firstName.toLowerCase().indexOf(filterFirstName.toLowerCase()) !==
        -1 &&
      friend.lastName.toLowerCase().indexOf(filterLastName.toLowerCase()) !==
        -1 &&
      friend.username.toLowerCase().indexOf(filterUserName.toLowerCase()) !== -1
  );

  useEffect(() => {
    setUsers(friendList);
  }, [filter]);

  return (
    <div className="friendCard">
      <div className="friendCardContainer">
        <div className="item cardW hoverScale">
          <div className="friendContent">
            <img
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="friend"
            />
            <div className="friendData">
              <span>Michel Figueiras Anache</span>
              <span>57 commun friends</span>
            </div>
          </div>
          <div className="actions">
            <button>
              <BiDotsVertical />
            </button>
          </div>
        </div>
        {users.map((friend) => (
          <div className="item cardW hoverScale" key={friend.id}>
            <div className="friendContent">
              <img src={friend.avatar} alt="friend" />
              <div className="friendData">
                <span>{`${friend.firstName} ${friend.lastName}`}</span>
                <span>{friend.communFriends} commun friends</span>
              </div>
            </div>
            <div className="actions">
              <button>
                <BiDotsVertical />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendCard;

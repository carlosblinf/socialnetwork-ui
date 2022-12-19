import { onlines } from '../../store/data';
import OnlineFriendCard from './OnlineFriendCard';
import './OnlineFriends.scss';

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

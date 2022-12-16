import { AiOutlineMessage } from 'react-icons/ai';
import { OnlineUser } from '../../../utils/types';

type OnlineFriendCardProps = {
  user: OnlineUser;
};
function OnlineFriendCard({ user }: OnlineFriendCardProps) {
  return (
    <>
      <div className="info">
        <img src={user.avatar} alt="friend" />
        {`${user.firstName} ${user.lastName}`}
      </div>
      {user.countMessage && user.countMessage > 0 ? (
        <span>{user.countMessage}</span>
      ) : (
        <AiOutlineMessage />
      )}
    </>
  );
}

export default OnlineFriendCard;

import { AiOutlineMessage } from 'react-icons/ai';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  countMessage: number;
};
type FriendCardProps = {
  user: User;
};
function FriendCard({ user }: FriendCardProps) {
  return (
    <>
      <div className="info">
        <img src={user.avatar} alt="friend" />
        {`${user.firstName} ${user.lastName}`}
      </div>
      {user.countMessage > 0 ? (
        <span>{user.countMessage}</span>
      ) : (
        <AiOutlineMessage />
      )}
    </>
  );
}

export default FriendCard;

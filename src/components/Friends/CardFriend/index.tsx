import { AiOutlineMessage } from 'react-icons/ai';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  countMessage: number;
};
type CardFriendProps = {
  user: User;
};
function CardFriend({ user }: CardFriendProps) {
  return (
    <>
      <div className="info">
        <img src={user.imageUrl} alt="friend" />
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

export default CardFriend;

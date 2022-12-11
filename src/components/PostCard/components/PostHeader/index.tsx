import { Author } from '../../../../utils/types';
import './PostHeader.scss';

export type PostHeaderProps = {
  author: Author;
  date: string;
};

function PostHeader({ author, date }: PostHeaderProps) {
  return (
    <div className="header">
      <div className="postAuthor">
        <div>
          <img src={author.avatar} alt={author.firstName} />
        </div>
        <div className="div">
          <p className="postUser">{author.firstName}</p>
          <p className="postDate">{date}</p>
        </div>
      </div>
      <div className="actions">...</div>
    </div>
  );
}

export default PostHeader;

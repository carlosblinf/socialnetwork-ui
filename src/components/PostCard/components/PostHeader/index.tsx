import { BiDotsHorizontal } from 'react-icons/bi';
import { fullName, toRelativeTime } from '../../../../utils/infoUtils';
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
          <p className="postUser">{fullName(author)}</p>
          <p className="postDate">{toRelativeTime(date)}</p>
        </div>
      </div>
      <div className="actions"><BiDotsHorizontal /></div>
    </div>
  );
}

export default PostHeader;

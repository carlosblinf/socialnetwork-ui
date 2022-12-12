import React from 'react';
import WriteComment from '../WriteComment';
import './Comments.scss';
import CommentCard from './components/CommentCard';

const comments = [
  {
    id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus delectus odit iste ipsa dolor ratione provident impedit velit suscipit labore',
    userId: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
    author: {
      id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
      firstName: 'Tyrell',
      lastName: 'Barrows',
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    date: '2022-12-08T22:42:19.560Z',
  },
  {
    id: 'c5a2a9ee-c6e8-48da-b6c2-f7cfd6b8f6b8',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto ex, quibusdam pariatur libero incidunt.',
    userId: 'af88b4a4-9be8-4f82-bea3-48c0cf03e71a',
    author: {
      id: 'af88b4a4-9be8-4f82-bea3-48c0cf03e71a',
      firstName: 'Alison',
      lastName: 'Reichert',
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
    date: '2022-12-08T23:14:19.560Z',
  },
];

function Comments() {
  return (
    <div className="commemts">
      <div className="containerComment">
        <WriteComment />
        {comments.map((com) => (
          <CommentCard key={com.id} comment={com} />
        ))}
      </div>
    </div>
  );
}

export default Comments;

import PostCard from '../PostCard';
import './PostList.scss';

export const posts = [
  {
    id: 'c5a2a9ee-c6e8-48da-b6b2-f7cfd6b8f6b8',
    author: {
      id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
      firstName: 'Tyrell',
      lastName: 'Barrows',
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    date: '2022-12-08T22:42:19.560Z',
    text: '¡Hola a todos! Acabo de unirme a esta red social y estoy emocionada de conocer a todos.',
    images: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/6061698/pexels-photo-6061698.jpeg',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg',
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg',
      },
      {
        id: 5,
        url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg',
      },
      {
        id: 6,
        url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg',
      },
      {
        id: 7,
        url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg',
      },
    ],
  },
  {
    id: 'c85f6817-5e5a-4d75-9ad9-2e3a3f3c1fdb',
    author: {
      id: 'af88b4a4-9be8-4f82-bea3-48c0cf03e71a',
      firstName: 'Alison',
      lastName: 'Reichert',
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
    date: '2022-12-08T23:14:19.560Z',
    text: '¡Hola Sofía! Bienvenida a la red social. ¿De dónde eres?',
    images: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg',
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg',
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg',
      },
    ],
  },
  {
    id: 'ff9bfbe4-b0be-4b41-98a5-8ec29a3577f7',
    author: {
      id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
      firstName: 'Miles',
      lastName: 'Cummerata',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    date: '2022-12-08T23:19:19.560Z',
    text: '¡Hola Juan! Soy de México. ¿Y tú?',
    images: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg',
      },
    ],
  },
  {
    id: 'ff9bfbe4-b0be-4b41-98b5-8ec29a3577f7',
    author: {
      id: 'c7f1d345-a03e-44be-8a3c-be6f3d9b9a8a',
      firstName: 'Miles',
      lastName: 'Cummerata',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    date: '2022-12-08T23:19:19.560Z',
    text: 'Me gustó mucho todo',
  },
];

function PostList() {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;

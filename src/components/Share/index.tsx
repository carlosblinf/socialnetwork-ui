import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../contex/AuthContext';
import { useGlobal } from '../../contex/GlobalContext';
import { useAppDispatch } from '../../store/store';
import { addPost } from '../../store/features/post/post.slice';
import { v4 as uuidv4 } from 'uuid';
import { Post } from '../../utils/types';
import { toast } from '../ToastManager';
import './Share.scss';

function Share() {
  const { authUser } = useAuth();
  const [fileList, setFileList] = useState<File[]>([]);
  const { changeImages, openModal } = useGlobal();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, [fileList]);

  const handleOnFileChange = ({
    currentTarget: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setFileList((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const getImageList = () => {
    return fileList.map((file, index) => {
      return {
        id: uuidv4(),
        url: URL.createObjectURL(file),
      };
    });
  };
  const showImages = (): void => {
    if (fileList && fileList.length) {
      changeImages(getImageList());
      openModal();
    }
  };

  const deleteImages = (): void => {
    setFileList([]);
    changeImages([]);
  };

  const onClik = () => {
    const text = inputRef.current?.value;
    if (text && text?.length > 0) {
      const newPost: Post = {
        id: uuidv4(),
        author: authUser,
        date: new Date().toISOString(),
        text,
        images: [...getImageList()],
      };
      dispatch(addPost(newPost));
      deleteImages();
      inputRef.current.value = '';
    } else
      toast.show({
        title: 'Error',
        content: 'Empty post text, share something',
      });
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={authUser?.avatar} alt="user" />
            <input
              type="text"
              placeholder={`What's new, ${authUser?.firstName}?`}
              ref={inputRef}
            />
          </div>
          <div className="right">
            {fileList.length > 0 && (
              <>
                <img
                  alt="file"
                  src={URL.createObjectURL(fileList[fileList.length - 1])}
                  onClick={() => showImages()}
                />
                <span onClick={() => deleteImages()}>&times;</span>
              </>
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: 'none' }}
              onChange={handleOnFileChange}
            />
            <label htmlFor="file">
              <div className="item">
                <img src="/image-svgrepo-com.svg" alt="addImage" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="/map-svgrepo-com.svg" alt="place" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="/add-user-svgrepo-com.svg" alt="tag friends" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={onClik}>Post it!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;

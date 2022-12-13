import { useEffect, useState } from 'react';
import { useAuth } from '../../contex/AuthContext';
import { useGlobal } from '../../contex/GlobalContext';
import './Share.scss';

function Share() {
  const { authUser } = useAuth();
  const [fileList, setFileList] = useState<File[]>([]);
  const { changeImages, openModal } = useGlobal();

  useEffect(() => {}, [fileList]);

  const handleOnFileChange = ({
    currentTarget: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setFileList((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const showImages = (): void => {
    if (fileList && fileList.length) {
      let images = fileList.map((file, index) => {
        return {
          id: index,
          url: URL.createObjectURL(file),
        };
      });
      changeImages(images);
      openModal();
    }
  };

  const deleteImages = (): void => {
    setFileList([]);
    changeImages([]);
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
                <img src="image-svgrepo-com.svg" alt="addImage" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="map-svgrepo-com.svg" alt="place" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="add-user-svgrepo-com.svg" alt="tag friends" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Post it!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;

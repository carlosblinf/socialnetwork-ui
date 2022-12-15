import React from 'react';
import {
  MdModeEdit,
  MdOutlineEmail,
  MdOutlineLanguage,
  MdPlace,
} from 'react-icons/md';
import { User } from '../../../../utils/types';
import './ProfileInfo.scss';
import { useAuth } from '../../../../contex/AuthContext';
import { IoAddCircleSharp } from 'react-icons/io5';

type ProfileInfoProps = {
  user: User | null;
};

function ProfileInfo({ user }: ProfileInfoProps) {
  const { authUser } = useAuth();
  return (
    <div className="profileInfo">
      <div className="profileContainer card">
        <div className="left">
          <img src={user?.avatar} className="avatar" alt="avatar" />
          <div className="info">
            <span>{`${user?.firstName} ${user?.lastName}`}</span>
            <span>@{user?.username}</span>
            <div className="socials">
              <a href="http://facebook.com">
                <span>
                  <img src="/facebook.svg" alt="facebook" />
                </span>
              </a>
              <a href="http://instagram.com">
                <span>
                  <img src="/instagram.svg" alt="instagram" />
                </span>
              </a>
              <a href="http://twitter.com">
                <span>
                  <img src="/twitter.svg" alt="twitter" />
                </span>
              </a>
              <a href="http://youtube.com">
                <span>
                  <img src="/youtube.svg" alt="twitter" />
                </span>
              </a>
            </div>

            {/* <div className="personalInfo">
              <div className="item">
                <MdPlace />
                <span>USA</span>
              </div>
              <div className="item">
                <MdOutlineLanguage />
                <span>yoursite.com</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="right">
          {authUser?.id === user?.id ? (
            <>
              <button>
                <IoAddCircleSharp /> Add History
              </button>
              <button>
                <MdModeEdit />
                <span>Edit</span>
              </button>
            </>
          ) : (
            <>
              <button>follow</button>
              <button>
                <MdOutlineEmail />
                <span>Message</span>
              </button>
            </>
          )}

          {/* <BsThreeDotsVertical /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;

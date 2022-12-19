import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getImageUrl } from '../utils/infoUtils';
import {
  User,
  NewUserFrom,
  UserCredential,
  SocialStorage,
} from '../utils/types';
import { ThemeProviderProps } from './ThemeModeContext';

type AuthContextType = {
  authUser: User;
  isLogin: boolean;
  registerUser: (user: NewUserFrom) => void;
  login: (credentials: UserCredential) => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

const localStorageUser = localStorage.getItem(SocialStorage.SOCIAL_USER);
const localStorageisLoging = localStorage.getItem(SocialStorage.SOCIAL_AUTH);

export function AuthContextProvider({ children }: ThemeProviderProps) {
  const [authUser, setAuthUser] = useState<User>(
    (localStorageUser && JSON.parse(localStorageUser)) || {}
  );
  const [isLogin, setIsLogin] = useState<boolean>(
    (localStorageisLoging && JSON.parse(localStorageisLoging)) || false
  );

  const currentUser = useMemo(
    () => ({
      firstName: authUser?.firstName,
      lastName: authUser?.lastName,
      avatar: authUser?.avatar,
      coverImage: authUser?.coverImage,
      username: authUser?.username,
    }),
    [
      authUser?.firstName,
      authUser?.lastName,
      authUser?.avatar,
      authUser?.coverImage,
      authUser?.username,
    ]
  );

  useEffect(() => {
    localStorage.setItem(SocialStorage.SOCIAL_USER, JSON.stringify(authUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(SocialStorage.SOCIAL_AUTH, JSON.stringify(isLogin));
  }, [isLogin]);

  const registerUser = (user: NewUserFrom) => {
    const newUser: User = {
      ...user,
      id: uuidv4(),
      avatar: getImageUrl(user.gender),
      coverImage: '/default_cover.jpg',
      role: 'user',
    };
    if (localStorageUser) {
      const userSaved = JSON.parse(localStorageUser);

      if (
        userSaved.username === user.username ||
        userSaved.email === user.email
      )
        throw new Error('You already have an account, please try to login!');
    }

    setAuthUser(newUser);

    setIsLogin(true);
  };

  const login = (credentials: UserCredential) => {
    if (localStorageUser) {
      const user = JSON.parse(localStorageUser);

      if (
        credentials.username === user.username &&
        credentials.password === user.password
      )
        setIsLogin(true);
      else throw new Error('Username or password incorrect!');
    } else throw new Error('You need to register!');
  };

  const logout = () => {
    setIsLogin(false);
  };

  const values = useMemo(
    () => ({
      authUser,
      isLogin,
      registerUser,
      login,
      logout,
    }),
    [authUser, isLogin]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

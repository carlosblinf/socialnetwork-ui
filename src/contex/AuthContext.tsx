import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getImageUrl } from '../utils/infoUtils';
import { User, NewUserFrom, UserCredential } from '../utils/types';
import { ThemeProviderProps } from './ThemeModeContext';

type AuthContextType = {
  authUser: User | null;
  isLogin: boolean;
  registerUser: (user: NewUserFrom) => void;
  login: (credentials: UserCredential) => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

const localStorageUser = localStorage.getItem('user');
const localStorageisLoging = localStorage.getItem('auth');

export function AuthContextProvider({ children }: ThemeProviderProps) {
  const [authUser, setAuthUser] = useState<User | null>(
    (localStorageUser && JSON.parse(localStorageUser)) || null
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
    localStorage.setItem('user', JSON.stringify(authUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(isLogin));
    console.log('eff', isLogin);
  }, [isLogin]);

  const registerUser = (user: NewUserFrom) => {
    const newUser: User = {
      ...user,
      id: uuidv4(),
      avatar: getImageUrl(user.gender),
      coverImage: '/default_cover',
      role: 'user',
    };

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

      throw new Error('username or password incorrect!');
    }
    throw new Error('you have register!');
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

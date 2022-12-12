/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-bind */
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import ModalImages from '../components/ModalImages/index';
import { Image } from '../utils/types';
import { ThemeProviderProps } from './ThemeModeContext';

type GlobalContextType = {
  openModal: () => void;
  closeModal: () => void;
  images: Image[];
  changeImages: (array: Image[]) => void;
};

const GlobalContext = createContext({} as GlobalContextType);

export const useGlobal = () => useContext(GlobalContext);

export function GlobalContextProvider({ children }: ThemeProviderProps) {
  const [isOpen, setOpen] = useState(false);
  const [images, setImages] = useState<Array<Image>>([]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  function changeImages(array: Image[]) {
    setImages(array);
  }

  return (
    <GlobalContext.Provider
      value={{ openModal, closeModal, images, changeImages }}
    >
      {children}
      <ModalImages isOpen={isOpen} images={images} closeModal={closeModal} />
    </GlobalContext.Provider>
  );
}

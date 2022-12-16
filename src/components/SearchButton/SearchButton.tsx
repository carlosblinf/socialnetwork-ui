import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchButton.scss';

type SearchProps = {
  placeholder: string;
};

function SearchButton({ placeholder }: SearchProps) {
  return (
    <div className="searchContent">
      <div className="search">
        <BsSearch />
        <input type="text" name="search" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default SearchButton;

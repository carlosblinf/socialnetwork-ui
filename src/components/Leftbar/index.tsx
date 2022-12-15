import './Leftbar.scss';

import MenuBar from '../MenuBar';
import UserCard from '../UserCard';
import Comunity from '../Comunity';

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="containerLeftbar">
        <UserCard />
        <MenuBar />
        <Comunity />
      </div>
    </div>
  );
}

export default Leftbar;

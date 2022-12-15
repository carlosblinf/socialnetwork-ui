import React from 'react';
import { MdOutlineLanguage, MdPlace, MdMessage, MdPhone } from 'react-icons/md';
import './TabInformation.scss';

function TabInformation() {
  return (
    <div className="tabInformation">
      <div className="personalInfo">
        <div className="row">
          <div className="column">Phone</div>
          <div className="column">
            <MdPhone />
            <span>+1 408 523 523</span>
          </div>
        </div>
        <div className="row">
          <div className="column">Email</div>
          <div className="column">
            <MdMessage />
            <span>user@mail.com</span>
          </div>
        </div>
        <div className="row">
          <div className="column">Country</div>
          <div className="column">
            <MdPlace />
            <span>USA</span>
          </div>
        </div>
        <div className="row">
          <div className="column">Site</div>
          <div className="column">
            <MdOutlineLanguage />
            <span>yoursite.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabInformation;

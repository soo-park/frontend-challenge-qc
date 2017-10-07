import React from 'react';

const TopBar = (props) => {
  return (
    <div className="navbar navbar-default navbar-fixed-top" role="navigation">
      <a className="navbar-brand" >CRIATIVES</a>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#about"><span className="upload-top-menu-icon"/> Upload</a>
          </li>
          <li>
            <a href="#contact"><span className="add-top-menu-icon"/> Add</a>
          </li>
          <li>
            <a> </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;

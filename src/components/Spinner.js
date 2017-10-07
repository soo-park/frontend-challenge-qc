import React from 'react';
import Spinner from "react-svg-spinner";

const Preloader = (props) => {
  return (
    <div className="preloader loading">
      <Spinner
        size="64px"
        height="64px"
        width="64px"
        color="grey"
        thickness={5}
        gap={3}
        speed="slow"
      />
    </div>
  );
}

export default Preloader;

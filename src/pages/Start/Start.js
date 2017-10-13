import React from 'react';
import WhiteboardsContainer from '../../common/components/WhiteboardsContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Start = () => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
      <WhiteboardsContainer />
    </header>
  </div>
);

export default Start;

import React from 'react';
import NotesContainer from '../../common/components/NotesContainer';
import wbPropTypes from './Whiteboard.props';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Whiteboard = props => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
    </header>
    <NotesContainer whiteboardId={props.match.params.id} />
  </div>
);

Whiteboard.propTypes = wbPropTypes;

export default Whiteboard;

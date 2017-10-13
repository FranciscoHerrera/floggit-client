import React from 'react';
import whiteboardListProps from './WhiteboardList.props';
import Whiteboard from './Whiteboard/Whiteboard';

const WhiteboardList = props => (
  <ul>
    {props.whiteboards.map(wb =>
      (<li key={wb.id}>
        <Whiteboard
          id={wb.id}
          name={wb.name}
          handleJoinWhiteboard={props.handleJoinWhiteboard}
          handleDeleteWhiteboard={props.handleDeleteWhiteboard}
        /> </li>))}
  </ul>);

WhiteboardList.propTypes = whiteboardListProps;

export default WhiteboardList;

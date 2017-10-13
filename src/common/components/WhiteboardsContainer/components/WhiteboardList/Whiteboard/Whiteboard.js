import React from 'react';
import whiteboardProps from './Whiteboard.props';

const Whiteboard = (props) => {
  const handleDelete = () => {
    props.handleDeleteWhiteboard(props.id);
  };

  const handleJoin = () => {
    props.handleJoinWhiteboard({ id: props.id, name: props.name });
  };

  return (
    <div>
    ID: {props.id}
    Name: {props.name}
      <button type="button" onClick={handleJoin}> JOIN </button>
      <button type="button" onClick={handleDelete}> REMOVE </button>
    </div>);
};

Whiteboard.propTypes = whiteboardProps;

export default Whiteboard;

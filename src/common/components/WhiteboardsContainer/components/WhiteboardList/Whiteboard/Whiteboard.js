import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/home" onClick={handleJoin}> JOIN </NavLink>
      <NavLink to="/" onClick={handleDelete}> REMOVE </NavLink>
    </div>);
};

Whiteboard.propTypes = whiteboardProps;

export default Whiteboard;

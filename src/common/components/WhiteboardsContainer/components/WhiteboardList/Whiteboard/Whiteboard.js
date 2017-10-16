import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteboardProps from './Whiteboard.props';
import './Whiteboard.css';

const Whiteboard = (props) => {
  const handleDelete = () => {
    props.handleDeleteWhiteboard(props.id);
  };

  return (
    <div className="wb-container">
      <NavLink className="name" to={`/whiteboard/${props.id}`}> {props.name} </NavLink>
      <NavLink className="wb-btn-delete" to="/" onClick={handleDelete}> X </NavLink>
    </div>);
};

Whiteboard.propTypes = whiteboardProps;

export default Whiteboard;

import React from 'react';
import whiteboardsWrapperProps from './WhiteboardsWrapper.props';
import WhiteboardList from './components/WhiteboardList';
import './WhiteboardsWrapper.css';

const WhiteboardsWrapper = (props) => {
  let inputText;

  const handleChangeInputText = (event) => {
    inputText = event.target.value;
  };

  const handleAddWhiteboard = () => {
    props.handleCreateWhiteboard(inputText);
  };

  const handleAddBtnClicked = () => {
    props.handleAddBtnClicked();
  };

  const handleLeaveForm = () => {
    props.handleLeaveForm();
  };

  const showForm = () => (
    <div className="WhiteboardContainer-create-form">
      <input
        type="text"
        placeholder="Name"
        onChange={handleChangeInputText}
      />
      <button
        type="button"
        onClick={handleAddWhiteboard}
        className="WhiteboardContainer-btn-create"
      > Create Whiteboard
      </button>
      <button
        type="button"
        onClick={handleLeaveForm}
      > X
      </button>
    </div>
  );

  const showAddBtn = () => (
    <button
      type="button"
      onClick={handleAddBtnClicked}
    > Add Whiteboard
    </button>
  );

  return (
    <div className="WhiteboardContainer-wrapper">
      {props.displayForm ? showForm() : showAddBtn()}
      <WhiteboardList
        whiteboards={props.whiteboards}
        handleDeleteWhiteboard={props.handleDeleteWhiteboard}
      />
    </div>);
};

WhiteboardsWrapper.propTypes = whiteboardsWrapperProps;

export default WhiteboardsWrapper;

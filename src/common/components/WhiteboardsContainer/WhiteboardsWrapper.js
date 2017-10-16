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

  const showForm = () => (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={handleChangeInputText}
      />
      <button
        type="button"
        onClick={handleAddWhiteboard}
      > Create a Whiteboard
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
        handleJoinWhiteboard={props.handleChangeWhiteboard}
        handleDeleteWhiteboard={props.handleDeleteWhiteboard}
      />
    </div>);
};

WhiteboardsWrapper.propTypes = whiteboardsWrapperProps;

export default WhiteboardsWrapper;

import React from 'react';
import whiteboardsWrapperProps from './WhiteboardsWrapper.props';
import WhiteboardList from './components/WhiteboardList';

const WhiteboardsWrapper = (props) => {
  let inputText;

  const handleChangeInputText = (event) => {
    inputText = event.target.value;
  };

  const handleAddWhiteboard = () => {
    props.handleCreateWhiteboard(inputText);
  };

  return (
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

      <br />
      <br />
      <WhiteboardList
        whiteboards={props.whiteboards}
        handleJoinWhiteboard={props.handleChangeWhiteboard}
        handleDeleteWhiteboard={() => {}}
      />
    </div>);
};

WhiteboardsWrapper.propTypes = whiteboardsWrapperProps;

export default WhiteboardsWrapper;

import React from 'react';

function Translate(props) {
  return (
    <div className="translate">
      <button onClick={props.handleClick}>Translate</button>
    </div>
  );
}

export default Translate;

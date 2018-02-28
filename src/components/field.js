import React from 'react';

const SingleField = props => (
  <div className="field">
    <h2>{props.type}</h2>
    <h3>Definition</h3>
    <p>{props.definition}</p>
  </div>
);

export default SingleField;

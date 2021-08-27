import React from 'react';

const Display = ({ result }) => {
  return (
    <div className="result">
      <p>
        <input type="text" placeholder="0" value={result} />
      </p>
    </div>
  );
};

export default Display;

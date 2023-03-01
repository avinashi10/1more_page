// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS

function FormatFilter({ setFormat }) {
  const formatArray = ['board book', 'picture book', 'graphic novel'];

  // SET STATES
  const [checkedState, setCheckedState] = useState(
    new Array(formatArray.length).fill(false),
  );

  return (
    <div>
      <h3>Format</h3>
      <ul className="format">
        {formatArray.map((aFormat, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={aFormat}
                name="format"
                value={aFormat}
                checked={checkedState[index]}
              />
              <label htmlFor={aFormat}>{aFormat}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FormatFilter;

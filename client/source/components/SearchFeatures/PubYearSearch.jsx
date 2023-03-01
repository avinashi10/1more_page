// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS

function PubYearSearch({ setPubYear }) {
  const pubYearArray = ['2023', '2022', '2021', '2020', '2019', 'Before 2019'];

  // SET STATES
  const [checkedState, setCheckedState] = useState(
    new Array(pubYearArray.length).fill(false),
  );

  return (
    <div>
      <h3>Year Published</h3>
      <ul className="pubYears">
        {pubYearArray.map((year, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={year}
                name="pubYears"
                value={year}
                checked={checkedState[index]}
              />
              <label htmlFor={year}>{year}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PubYearSearch;

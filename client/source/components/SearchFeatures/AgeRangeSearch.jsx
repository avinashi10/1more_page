// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';

// LOCAL IMPORTS

function AgeRangeSearch({ ageRange, setAgeRange }) {
  const ageRangeArray = ['0-2', '2-4', '4-6', '6-8', '8-10'];
  // const ageRangeFilters = [];

  // SET STATES
  const [checkedState, setCheckedState] = useState(
    new Array(ageRangeArray.length).fill(false),
  );

  // HANDLE EVENTS
  const handleChange = (value, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      (index === position ? !item : item));

    setCheckedState(updatedCheckedState);

    // setAgeRange(ageRangeFilters);
  };

  useEffect(() => {
    checkedState.forEach((item, index) => {
      if (item) {
        setAgeRange([...ageRange, ageRangeArray[index]]);
        console.log('Age Range: ', ageRange);
      }
    });
  }, [checkedState]);

  return (
    <div>
      <h3>Age Range</h3>
      <ul className="age_range">
        {ageRangeArray.map((range, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={range}
                name="age_range"
                value={range}
                checked={checkedState[index]}
                onChange={() => handleChange(range, index)}
              />
              <label htmlFor={range}>{range}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AgeRangeSearch;

// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS

function AgeRangeSearch({ setAgeRange }) {
  const ageRangeArray = ['0-2', '2-4', '4-6', '6-8', '8-10'];

  return (
    <div>
      <h3>Age Range</h3>
      <form>
        <input type="checkbox" id="0-2" name="age_range" value="0-2" />
        <label htmlFor="0-2">0-2</label>
        <input type="checkbox" id="2-4" name="age_range" value="2-4" />
        <label htmlFor="2-4">2-4</label>
        <input type="checkbox" id="4-6" name="age_range" value="4-6" />
        <label htmlFor="4-6">4-6</label>
        <input type="checkbox" id="6-8" name="age_range" value="6-8" />
        <label htmlFor="6-8">6-8</label>
        <input type="checkbox" id="8-10" name="age_range" value="8-10" />
        <label htmlFor="8-10">8-10</label>
      </form>
    </div>
  );
}

export default AgeRangeSearch;

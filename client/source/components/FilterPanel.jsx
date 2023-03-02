// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';

// LOCAL IMPORTS
import FilterListToggle from './FilterFeatures/FilterListToggle.jsx';
import { formatList, ageList, raceList } from './FilterFeatures/filterValues.js';

function FilterPanel({ selectedFormat, selectFormat, selectedAge, selectAge, selectedRace, selectRace }) {
  return (
    <div>
      <div className="input-group">
        <p className="label">Format</p>
        <FilterListToggle options={formatList} value={selectedFormat} selectToggle={selectFormat} />
      </div>
      <div className="input-group">
        <p className="label">Ages</p>
        <FilterListToggle options={ageList} value={selectedAge} selectToggle={selectAge} />
      </div>
      <div className="input-group">
        <p className="label">Racial Identity</p>
        <FilterListToggle options={raceList} value={selectedRace} selectToggle={selectRace} />
      </div>
    </div>
  );
}

export default FilterPanel;

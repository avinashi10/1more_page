// LIBRARY IMPORTS
import React, { useState, useEffect } from 'react';

// LOCAL IMPORTS
import RadioButtonList from './FilterFeatures/RadioButtonList.jsx';
import { formatList, ageList, raceList } from './FilterFeatures/filterValues.js';

function FilterPanel({ selectedFormat, selectFormat, selectedAge, selectAge, selectedRace, selectRace }) {
  return (
    <div>
      <div className="input-group">
        <p className="label">Format</p>
        <RadioButtonList options={formatList} value={selectedFormat} selectToggle={selectFormat} />
      </div>
      <div className="input-group">
        <p className="label">Ages</p>
        <RadioButtonList options={ageList} value={selectedAge} selectToggle={selectAge} />
      </div>
      <div className="input-group">
        <p className="label">Racial Identity</p>
        <RadioButtonList options={raceList} value={selectedRace} selectToggle={selectRace} />
      </div>
    </div>
  );
}

export default FilterPanel;

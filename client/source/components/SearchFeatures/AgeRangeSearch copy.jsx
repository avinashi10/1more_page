// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS

function SearchFeatures({ setAgeRange, setFormat, setYearPub }) {
  return (
    <div>
      <h3>Format</h3>
      <form>
        <input type="checkbox" id="board_book" name="format" value="board_book" />
        <label htmlFor="board_book">board book</label>
        <input type="checkbox" id="picture_book" name="format" value="picture_book" />
        <label htmlFor="picture_book">picture book</label>
        <input type="checkbox" id="graphic_novel" name="format" value="graphic_novel" />
        <label htmlFor="graphic_novel">graphic novel</label>
      </form>
      <h3>Year Published</h3>
      <form>
        <input type="checkbox" id="2023" name="year" value="2023" />
        <label htmlFor="2023">2023</label>
        <input type="checkbox" id="2022" name="year" value="2022" />
        <label htmlFor="2022">2022</label>
        <input type="checkbox" id="2021" name="year" value="2021" />
        <label htmlFor="2021">2021</label>
        <input type="checkbox" id="2020" name="year" value="2020" />
        <label htmlFor="2020">2020</label>
        <input type="checkbox" id="2019" name="year" value="2019" />
        <label htmlFor="2019">2019</label>
      </form>
    </div>
  );
}

export default SearchFeatures;

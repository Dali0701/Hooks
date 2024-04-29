import React from 'react';
import './Filter.css';

const Filter = ({ title, rate, setTitle, setRate, applyFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum Rating"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <button onClick={applyFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;

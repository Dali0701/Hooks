import React, { useState } from 'react';
import MovieList from './MoviesList';
import Filter from './Filter';
import './App.css';


const App = () => {
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  return (
    <div className="app">
      <Filter
        title={titleFilter}
        rate={rateFilter}
        setTitle={setTitleFilter}
        setRate={setRateFilter}
      />
      <MovieList titleFilter={titleFilter} rateFilter={rateFilter} />
    </div>
  );
};

export default App;

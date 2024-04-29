import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './MoviesList.css';

const MovieList = ({ titleFilter, rateFilter }) => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', posterURL: 'https://media.senscritique.com/media/000004710747/300/inception.jpg', rating: 8.8 },
    { title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', posterURL: 'https://toutelaculture.com/wp-content/uploads/2014/11/interstellar3-691x1024.jpeg', rating: 8.6 },
    { title: 'The Dark Knight', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', posterURL: 'https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.webp?h=375&resize=fit&w=250', rating: 9.0 },
  ]);

  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.description || !newMovie.posterURL || !newMovie.rating) {
      alert('Please fill in all fields.');
      return;
    }
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const applyFilter = () => {
    // Implement filtering logic here
    console.log('Filter applied!');
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const meetsRating = movie.rating >= rateFilter;
    return matchesTitle && meetsRating;
  });

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movies">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <div className="movie-form">
        <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleInputChange} />
        <input type="text" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleInputChange} />
        <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleInputChange} />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default MovieList;

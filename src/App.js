
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import PersonListPage from "./PersonListPage";
import PersonPage from "./PersonPage";  

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personListPage" element={<PersonListPage />} />
          <Route path="/personPage" element={<PersonPage />} />
          
        </Routes>
    </BrowserRouter>
  );
}


export default App;

/*
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
    return <ul>{movies.map((m, i) => <li key={i}>{m.title}</li>)}</ul>;
}

function SetOutput() {
    const movies = [{ title: 'Movie A' }, { title: 'Movie B' }]; // Sample data
    console.log('movies in SetOutput:', movies);
    return (
        <Link to={{ pathname: '/movieList', state: { movies } }}>Go</Link>
    );
}

function MovieListPage() {
    const location = useLocation();
    console.log('location.state in MovieListPage:', location.state);
    const movies = location.state?.movies || [];
    return <MovieList movies={movies} />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SetOutput />} />
                <Route path="/movieList" element={<MovieListPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;*/

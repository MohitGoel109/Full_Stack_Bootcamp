import React from 'react'
import Parent from './Parent'
import MovieProvider from './MovieProvider';
import MovieList from './MovieList';

const App = () => {
  return (
    <>
    <div>App</div>
    <Parent />
    <MovieProvider>
      <MovieList />
    </MovieProvider>
    </>
  )
}

export default App
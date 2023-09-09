import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const handleSubmit= (term) => {
    console.log('Do search with', term);
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
    </div> 
  )
}

export default App
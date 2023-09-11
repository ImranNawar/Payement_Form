import { useState } from 'react';
import React from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');  // To empty the input field after onCreate
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  )
}

export default BookCreate;
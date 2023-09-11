import './App.css';
import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  // Fetch list of book to display on screen
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

  useEffect(() => {   // Run code when function is initially rendered
    fetchBooks();
  }, []);

  // This function for deletion
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // This function for deletion
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  //  To create book
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const updatedBooks = [
      ...books,
      response.data
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}  />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

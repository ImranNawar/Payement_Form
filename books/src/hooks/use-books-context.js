import { useContext } from 'react';
import BooksContext from '../context/books';

const useBooksContext = () => {
  return useContext(BooksContext);
}

export default useBooksContext;

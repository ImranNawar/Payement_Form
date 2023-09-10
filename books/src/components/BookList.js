import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks =  books.map((book) => {
    return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book}/>
  })
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList;
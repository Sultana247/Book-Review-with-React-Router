import React, { useEffect } from 'react';
import { useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='mt-25 mb-9'>
            <h3 className='text-center playfair-display-font font-bold text-2xl md:text-[40px]'>Books</h3>
            {/* book cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6'>
                {
                books.map(book=><Book key={book.id} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
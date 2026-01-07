import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { getLocalStorageData } from '../Utility/handleLocalstorage';
import { Link, useLoaderData } from 'react-router';
import DisplayListedBooks from './DisplayListedBooks';


const Listedbooks = () => {
    const books= useLoaderData();
    const [displaybooks, setDisplaybooks]=useState([])
    
    const handleSort=(sortbasedon)=>{
        if(sortbasedon==='rating'){
            const sortedBooks = [...displaybooks].sort((a, b) => b.rating - a.rating);
            setDisplaybooks(sortedBooks);
        }
        else if(sortbasedon==='pages'){
            const sortedBooks = [...displaybooks].sort((a, b) => b.totalPages - a.totalPages);
            setDisplaybooks(sortedBooks);
        }
        else if(sortbasedon==='year'){
            const sortedBooks = [...displaybooks].sort((a, b) => b.publicationYear - a.publicationYear);
            setDisplaybooks(sortedBooks);
        }
    }
    const getBooks=(container)=>{
        const getbooksid = getLocalStorageData(container);
        console.log(getbooksid);
        const listedbooks = [];
        for( const Id of getbooksid){
            console.log(Id);
            const getlistedbooks = books.find(book => book.bookId === Id);
            if(getlistedbooks){
                listedbooks.push(getlistedbooks);
            }
        }
        setDisplaybooks(listedbooks)

}
useState(()=>{
    getBooks('read-list');
},[]);
    return (
        <div className='mx-auto'>
            {/* banner of listed books page */}
            <div className="flex p-5 md:p-8 justify-center items-center bg-[#1313130D] mt-9.5 mb-9 rounded-2xl playfair-display-font ">
                    <h3 className='work-sans-font font-bold text-[28px]'>Books</h3>
            </div>
            {/* sort by button */}
            <div className='flex justify-center items-center'>
                <details className="dropdown ">
                    <summary className="btn m-1  rounded-lg bg-[#23BE0A] py-2 px-3 md:py-3 md:px-6 text-white flex items-center text-lg font-semibold work-sans-font gap-3">Sort by <MdOutlineKeyboardArrowDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={()=>handleSort('rating')}><a>Rating</a></button></li>
                        <li><button onClick={()=>handleSort('pages')}><a>Number of pages</a></button></li>
                        <li><button onClick={()=>handleSort('year')}><a>Publication year</a></button></li>
                        
                    </ul>
                </details>
                
            </div>

            {/* tabs of listed and wishlisted books */}
            <div role="tablist" className="tabs tabs-lift mt-14 mb-8">
                <Link role="tab" onClick={()=>getBooks('read-list')} className="tab tab-active">Read Books</Link>
                <Link role="tab" onClick={()=>getBooks('whishlist')} className="tab">Wishlist Books</Link>
                <Link role="tab"  className="tab"></Link>
                
            </div>
                {/* display listeed books */}
            <div className='flex-col '>
                {
                    displaybooks.map(book=><DisplayListedBooks book={book} key={book.bookId}></DisplayListedBooks>)
                }
            </div>
            
        </div>
    );
};

export default Listedbooks;
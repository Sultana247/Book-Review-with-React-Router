import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';


const Book = (books) => {
    const book = books.book;
    const {image, bookName, author,  rating, tags, category} = book;
    return (
        <Link to={`/book/${book.bookId}`}>
        
            <div className="card bg-base-100 shadow-sm p-6 rounded-2xl">
                <div className='bg-[#F3F3F3] py-8 px-24 rounded-2xl'>
                    <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                </div>
                <div className="">
                    <div className='flex gap-3 mt-6 mb-4'>
                        {tags.map(tag=><button className='bg-[#23BE0A0D] text-[#23BE0A] py-1.75 px-4 work-sans-font font-medium rounded-[30px] text-[16px]'>{tag}</button>)}
                        
                    </div>
                    <h3 className='playfair-display-font font-bold text-xl md:text-[24px] mb-4'>{bookName}</h3>
                    <p className='work-sans-font font-medium text-[16px] text-[#131313CC] '>By: {author}</p>
                    {/* divider */}
                    <div className='border border-dashed text-[#13131326] mt-5 mb-5'></div>
                    <div className='work-sans-font font-medium text-[16px] flex justify-between'>
                        <p >{category}</p>
                        <div className='flex items-center gap-2'>
                            <p>{rating}</p>
                            <CiStar />

                        </div>
                    </div>
                </div>
            </div>
        
        </Link>
        
    );
};

export default Book;
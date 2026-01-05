import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
const Bookdetails = () => {
    const books=useLoaderData();
    const {id}=useParams();
    const idInt =parseInt(id);
    const book = books.find(book=>book.bookId===idInt);
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing}=book;
    return (
        <div className='flex flex-col lg:flex-row gap-12 mt-13'>
            <div className='flex bg-[#F3F3F3] py-3 px-9 lg:py-8 lg:px-24 rounded-2xl justify-center items-center mx-auto w-[300px] md:w-[400px] lg:w-[400px]'>
                    <figure>
                    <img
                    src={image}
                    alt="Shoes" />
                </figure>
                </div>
            <div className='mx-auto'>
                 <h3 className='playfair-display-font font-bold text-2xl md:text-[40px] mb-4'>{bookName}</h3>
                 <p className='work-sans-font font-medium text-[16px] text-[#131313CC] '>By: {author}</p>
                 {/* divider */}
                 <div className='border border-dashed text-[#13131326] mt-5 mb-5'></div>
                 <div className='work-sans-font font-medium text-[16px] flex justify-between'>
                    <p >{category}</p>
                   
                </div>
                {/* divider */}
                <div className='border border-dashed text-[#13131326] mt-5 mb-5'></div>
                <p className='mt-6 mb-6 work-sans-font text-[16px] w-[290px] md:w-[500px]'><span className='font-bold '>Review:</span> {review}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 mb-4 items-center'>
                    <p className='work-sans-font text-[16px] font-bold'>Tag </p>
                    {tags.map(tag=><button className='bg-[#23BE0A0D] text-[#23BE0A] py-1.75 px-4 work-sans-font font-medium rounded-[30px] text-[16px]'>{tag}</button>)}
                        
                </div>
                {/* divider */}
                 <div className='border border-dashed text-[#13131326] mt-5 mb-5'></div>
                 <div className='work-sans-font text-[16px] flex gap-20 mt-3'>
                    <p className='text-[#131313B3] '>Number of Pages: </p>
                    <p className='font-bold'>{totalPages}</p>
                 </div>
                 <div className='work-sans-font text-[16px] flex gap-34 mt-3'>
                    <p className='text-[#131313B3] '>Publisher: </p>
                    <p className='font-bold'>{publisher}</p>
                 </div>
                 <div className='work-sans-font text-[16px] flex gap-19 mt-3'>
                    <p className='text-[#131313B3] '>Year of Publishing: </p>
                    <p className='font-bold'>{yearOfPublishing}</p>
                 </div>
                 <div className='work-sans-font text-[16px] flex gap-40 mt-3'>
                    <p className='text-[#131313B3] '>Rating: </p>
                    <p className='font-bold'>{rating}</p>
                 </div>
                
            </div>
        </div>
    );
};

export default Bookdetails;
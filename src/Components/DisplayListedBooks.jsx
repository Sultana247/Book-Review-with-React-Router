import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router';

const DisplayListedBooks = ({book}) => {
     
    
    
    const { bookName, author, image,  totalPages, rating, category, tags, publisher, yearOfPublishing}=book;
   
    
    return (
        <div className='border-2 border-base-200 rounded-2xl p-6 mt-6'>
            <div className='flex flex-col lg:flex-row gap-12 mt-13 mb-14 '>
                <div className='flex bg-[#F3F3F3] p-5 rounded-2xl  justify-center items-center '>
                        <figure>
                        <img
                        src={image}
                        alt="Shoes" className='w-[130px] ' />
                    </figure>
                </div>
            
                <div className='w-3/4'>
                        <h3 className='playfair-display-font font-bold text-2xl md:text-[40px] mb-4'>{bookName}</h3>
                        <p className='work-sans-font font-medium text-[16px] text-[#131313CC] '>By: {author}</p>
                        
                        
                
                    {/* tags */}
                    <div className='flex gap-3 mt-6 mb-4 items-center'>
                        <p className='work-sans-font text-[16px] font-bold'>Tag </p>
                        {tags.map(tag=><button className='bg-[#23BE0A0D] text-[#23BE0A] py-1.75 px-4 work-sans-font font-medium rounded-[30px] text-[16px]'>#{tag}</button>)}
                        <p className='flex gap-2 justify-center items-center'><CiLocationOn /> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                
                    <div className='mt-3 flex gap-8'>
                        <div className='work-sans-font text-[16px] flex gap-2 items-center'>
                            <FiUsers />
                            <p className='text-[#131313B3] '>Publisher: {publisher}</p>
                            
                        </div>
                        <div className='work-sans-font text-[16px] flex gap-2 items-center'>
                            <RiPagesLine />
                            <p className='text-[#131313B3] '>Number of Pages: {totalPages}</p>
                            
                        </div>
                    </div>    
                    {/* divider */}
                    <div className='border text-[#13131326] mt-5 mb-5'></div>
                    <div className='flex gap-3'>
                        <button className='bg-[#328EFF26] text-[#328EFF] py-1.75 px-4 work-sans-font rounded-[30px] text-[16px]'>Category: {category}</button>
                        <button className='bg-[#FFAC3326] text-[#FFAC33] py-1.75 px-4 work-sans-font rounded-[30px] text-[16px]'>Rating: {rating}</button>
                        <Link to={`/book/${book.bookId}`} className='bg-[#23BE0A] text-white py-1.75 px-4 work-sans-font rounded-[30px] text-[16px]'>View Details</Link>

                    </div>
                    
                    
                        
                    
                </div>
            </div>
        </div>
    );
};

export default DisplayListedBooks;
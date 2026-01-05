import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 px-6 py-8 md:px-12 md:py-14 lg:px-30 lg:py-34 md:gap-8 lg:gap-20 justify-center items-center bg-[#1313130D] mt-12 rounded-3xl playfair-display-font">
            <div>
                <h3 className='font-bold text-2xl md:text-3xl lg:text-[56px]'>Books to freshen up
                    <br />
                     your bookshelf</h3>
                     
                <div className='mt-12'>
                    <Link to="/listed-books" className=' px-7 py-5 rounded-lg text-white work-sans-font font-bold text-xl bg-[#23BE0A]'>View The List</Link>
                </div>
            </div>
            <img src="https://i.ibb.co.com/kVFpCqwJ/pngwing-1.png" alt="" />
           
        </div>
    );
};

export default Banner;
import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header/Header';

const Root = () => {
    return (
        <div className='max-w-292.5 mx-auto work-sans-font'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;
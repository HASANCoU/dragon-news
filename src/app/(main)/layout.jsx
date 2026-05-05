import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header/>
            <BreakingNews/>
            <NavBar/>
            {children}
        </div>
    );
};

export default MainLayout;
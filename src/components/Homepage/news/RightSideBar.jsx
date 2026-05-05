import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div className='col-span-3 space-y-2'>
            <h2 className='text-xl font-semibold text-gray-600'>Login With</h2>
            <div className='space-y-2'>
                <button className='btn bg-slate-200 p-2 rounded-md text-lg px-2 w-full flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-500'><FaGoogle/> Login With Google</button>
                <button className='btn bg-slate-200 p-2 rounded-md text-lg px-2 w-full flex items-center justify-center gap-2 border'><FaGithub/>Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSideBar;
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='flex justify-between mt-4 items-center'>
            <div></div>
            <ul className='flex gap-4 text-gray-400'>
                <li><NavLink href='/'>Home</NavLink></li>
                <li><NavLink href='/about-us'>About</NavLink></li>
                <li><NavLink href='/career'>Career</NavLink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={userAvatar} height={40} width={40} alt='User Avatar'></Image>
                <Link href='/login' className='btn bg-gray-700 text-white px-15'>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;
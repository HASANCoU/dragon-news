'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName = usePathname();
    const isActive = href=== pathName;
    return (
        <Link className={`${isActive?'bg-gray-700 text-white':''} btn `} href={href}>{children}</Link>
    );
};

export default NavLink;
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimming from '../../../assets/swimming.png'
import classImg from '../../../assets/class.png'
import playGround from '../../../assets/playground.png'
import Image from 'next/image';

const RightSideBar = () => {
    return (
        <div className='col-span-3 space-y-2'>
            <h2 className='text-xl font-semibold text-gray-600'>Login With</h2>
            <div className='space-y-2'>
                <button className='btn bg-slate-200 p-2 rounded-md text-lg px-2 w-full flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-500'><FaGoogle/> Login With Google</button>
                <button className='btn bg-slate-200 p-2 rounded-md text-lg px-2 w-full flex items-center justify-center gap-2 border'><FaGithub/>Login With GitHub</button>
            </div>
            <h2 className='text-xl font-semibold text-gray-600'>Find Us On</h2>
            <div className='border border-[#E7E7E7] rounded-xl'>

                <Link href="www.facebook.com" className='flex gap-3 items-center m-4'> <div className='bg-[#a1b6b681] rounded-full p-2'><FaFacebookF className='text-blue-700'/></div> <h2 className='font-medium text-lg text-[#406F6F]'>Facebook</h2>
                </Link>
                <hr className='border-[#E7E7E7]' />
                <Link href={`www.x.com`} className='flex gap-3 items-center border-b-gray-400 m-4'> <div className='bg-[#a1b6b681] rounded-full p-2'><FaTwitter className='text-blue-700'/></div> <h2 className='font-medium text-lg text-[#406F6F]'>Facebook</h2>
                </Link>

                <hr className='border-[#E7E7E7]'/>

                <Link href={`www.instagram.com`} className='flex gap-3 items-center border-b-gray-400 m-4'> <div className='bg-[#a1b6b681] rounded-full p-2'><FaInstagram className='text-red-500'/></div> <h2 className='font-medium text-lg text-[#406F6F]'>Facebook</h2>
                </Link>
                
            </div>

            <div className='bg-gray-100 p-6 space-y-8'>
                <h2 className='text-xl font-semibold text-gray-600'>Q Zone</h2>
                <Image src={swimming} alt="Swimming Image" width={300} height={300}></Image>
                <Image src={classImg} alt="Swimming Image" width={300} height={300}></Image>
                <Image src={playGround} alt="Swimming Image" width={300} height={300}></Image>
            </div>
        </div>
    );
};

export default RightSideBar;
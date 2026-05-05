import React from 'react';
import logo from '@/assets/logo.png'
import { format} from "date-fns";
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center my-12 space-y-2'>
           <Image src={logo} alt='Logo' height={200} width={300} className='mx-auto'></Image>
           <h2 className='text-[#706f6f]'>Journalism Without Fear or Favour</h2>
           <p className='text-[#706f6f] font-medium text-xl'>{format(new Date(), "EEEE, MMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;
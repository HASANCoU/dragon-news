import RightSideBar from '@/components/Homepage/news/RightSideBar';
import { getNewsByID } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

//Meta Data 
export async function generateMetadata({params}) {
    const {id} = await params;
    const news = await getNewsByID(id);
    const {title,details} = news;
    return {
    title: title,
    description: details,
  }
}


const NewsDetailsPage = async({params}) => {
    const {id}=await params;

    const news = await getNewsByID(id);
       const {image_url,title,details,category_id} = news;
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-12">

      <div className='border border-gray-500 rounded-xl p-7 col-span-9 space-y-5'>
            <Image src={image_url} height={300} width={300} alt={title} className='rounded-xl w-full'></Image>
            <h2 className='font-bold text-2xl leading-11 text-[#403F3F]'>{title}</h2>
            <p className='text-lg leading-6 text-[#706F6F] text-justify'>{details}</p>
            <Link href={`/category/${category_id}`} className='btn bg-[#D72050] text-white text-md font-medium'><GoArrowLeft className='font-bold text-2xl'/> All News in this category</Link>
      </div>

      <RightSideBar />
    </div>
    );
};

export default NewsDetailsPage;
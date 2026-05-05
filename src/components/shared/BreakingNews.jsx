import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    id: 11,
    title: "Tech Companies Race to Develop Next-Gen AI Chips",
    category: "Technology",
    timestamp: "2026-05-05T09:40:00Z"
  },
  {
    id: 12,
    title: "Local Farmers Adopt Smart Irrigation Systems",
    category: "Agriculture",
    timestamp: "2026-05-05T09:50:00Z"
  },
  {
    id: 13,
    title: "New Study Reveals Impact of Sleep on Productivity",
    category: "Health",
    timestamp: "2026-05-05T10:00:00Z"
  },
  {
    id: 14,
    title: "Electric Vehicles Gain Popularity in Urban Areas",
    category: "Automobile",
    timestamp: "2026-05-05T10:10:00Z"
  },
  {
    id: 15,
    title: "Major Airline Expands Routes to New Destinations",
    category: "Travel",
    timestamp: "2026-05-05T10:20:00Z"
  },
  {
    id: 16,
    title: "Breakthrough in Quantum Computing Announced",
    category: "Science",
    timestamp: "2026-05-05T10:30:00Z"
  },
  {
    id: 17,
    title: "Global Leaders Meet to Discuss Climate Change",
    category: "Politics",
    timestamp: "2026-05-05T10:40:00Z"
  },
  {
    id: 18,
    title: "Startup Launches Innovative Online Learning Platform",
    category: "Education",
    timestamp: "2026-05-05T10:50:00Z"
  },
  {
    id: 19,
    title: "City Introduces Smart Traffic Management System",
    category: "Infrastructure",
    timestamp: "2026-05-05T11:00:00Z"
  },
  {
    id: 20,
    title: "Researchers Discover New Species in Deep Ocean",
    category: "Environment",
    timestamp: "2026-05-05T11:10:00Z"
  }
];

const BreakingNews = () => {
    return (
        <div className='p-4 bg-gray-300 flex gap-6'>
            <button className='btn btn-ghost font-bold text-2xl text-red-500 '>Latest</button>
            <Marquee pauseOnHover="true" speed={70}>
               <p>{
                news.map(n=><span key={n.id} className='px-10  text-lg'>   {n.title}    </span>)
                }</p>

            </Marquee>
        </div>
    );
};

export default BreakingNews;
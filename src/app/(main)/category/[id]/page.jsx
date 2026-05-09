import LeftSideBar from "@/components/Homepage/news/LeftSideBar";
import NewsCard from "@/components/Homepage/news/NewsCard";
import RightSideBar from "@/components/Homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryID } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Dragon News || News Category",
};


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  
  const categories = await getCategories();
  const news = await getNewsByCategoryID(id);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-12">
      <LeftSideBar categories={categories} activeId={id} />

      <div className="col-span-6">
        <div className="space-y-6 my-4">
          {news.length>0?news.map((n) => (
            <NewsCard key={n._id} news={n}/>
          )):<h2 className="text-3xl font-semibold text-center my-20 text-orange-700">No News Found</h2>}
        </div>
      </div>

      <RightSideBar />
    </div>
  );
};

export default NewsCategoryPage;

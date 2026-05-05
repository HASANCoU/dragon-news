import LeftSideBar from "@/components/Homepage/news/LeftSideBar";
import RightSideBar from "@/components/Homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryID } from "@/lib/data";
import React from "react";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  
  const categories = await getCategories();
  const news = await getNewsByCategoryID(id);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-12">
      <LeftSideBar categories={categories} activeId={id} />

      <div className="col-span-6 bg-purple-300 ">
        <div className="space-y-3 font-bold p-4">
          {news.length>0?news.map((n) => (
            <h2 className="bg-slate-300 rounded-md p-4" key={n._id}>
              {n.title}
            </h2>
          )):<h2 className="text-3xl font-semibold text-center my-20 text-orange-700">No News Found</h2>}
        </div>
      </div>

      <RightSideBar />
    </div>
  );
};

export default NewsCategoryPage;

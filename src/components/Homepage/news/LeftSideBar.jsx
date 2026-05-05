import Link from "next/link";
import React from "react";

const LeftSideBar = ({categories,activeId}) => {
  return (
    <div className="col-span-3">
      <h2 className="text-xl font-semibold text-gray-600">All Categories</h2>
      <ul className="space-y-2 mt-4">
        {categories.news_category.map((category) => (
          <li
            key={category.category_name}
            className={`${activeId===category.category_id && "bg-slate-200"} p-2 rounded-md text-lg px-2`}
          >
            <Link className="block" href={`/category/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;

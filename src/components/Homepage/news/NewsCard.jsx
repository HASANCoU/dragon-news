import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import Link from "next/link";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view, _id } = news;
  const { name, img, published_date } = author || {};
  return (
    <div className="border border-gray-400 rounded-md">
      <div className="bg-gray-200 flex justify-between rounded-t-md py-4 px-4">
        <div className="flex items-center">
          <Image
            className="rounded-full p-2"
            src={img}
            width={50}
            height={50}
            alt="Author Image"
          ></Image>

          <div className="space-y-1">
            <h2 className="font-semibold text-[16px] text-gray-800">{name}</h2>
            <p className="text-gray-600 text-xs">
              {format(new Date(published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <button>
            {" "}
            <FaBookmark />
          </button>
          <button>
            <FaShare />
          </button>
        </div>
      </div>

      <div className="px-3 my-4">
        <h2 className="font-bold text-xl text-gray-800 leading-9">{title}</h2>
        <div>
          <Image
            className="w-full rounded-md"
            src={image_url}
            alt="News Thumbnail"
            width={300}
            height={300}
          ></Image>
        </div>

        <p className="text-16 leading-7 text-[#706F6F] line-clamp-4  mt-4 text-justify">
          {details}
        </p>
        <Link className="btn my-2" href={`/news/${_id}`}>
          See Details
        </Link>

        <hr className="border-gray-400"></hr>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-2xl  my-4]">
            <span className="flex text-3xl text-[#FF8C47] items-center">
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
            </span>
            <h2>{rating.number}</h2>
          </div>

          <div className="flex items-center gap-2 text-[#706f6f] text-xl">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-[80vh]">
      <div className="rounded-2xl  p-30 border-2 border-blue-500 flex flex-col justify-center items-center gap-4">
        <h2 className="text-blue-600 text-4xl font-medium">
          Page is Not Found!!!
        </h2>
        <Link href="/">
          <button className="btn btn-error rounded-2xl border">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

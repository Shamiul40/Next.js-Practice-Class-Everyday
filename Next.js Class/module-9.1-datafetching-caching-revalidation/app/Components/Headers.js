import Link from "next/link";
import React from "react";

export default function Headers() {
  return (
    <div className="flex justify-center flex-col gap-10 items-center ">
      <h1 className="text-3xl">Patarns and best practice</h1>
      <div className="flex justify-center items-center gap-8"  >
        <div >
          <Link href={"/sequntials/posts"} className="border border-blue-600 px-8 py-4 bg-blue-200 text-black rounded-sm">Sequntial data fetching</Link>
        </div>
        <div className="">
          <Link href={"/sequntials/posts"} className="border border-blue-600 px-8 py-4 bg-green-200 text-black rounded-sm">Parallal data fetching</Link>
        </div>
      </div>
    </div>
  );
}

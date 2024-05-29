import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center pt-20 justify-center">
        <div>Female page</div>
        <Link href={"/female/eg1"}>example 1</Link>
      </div>
    </>
  );
};

export default page;

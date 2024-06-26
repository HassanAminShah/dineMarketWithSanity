"use client";
import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="flex gap-x-5 pt-2 md:pt-5 items-center">
      <button
        className="w-8 h-8  flex bg-slate-50 justify-center items-center border rounded-full"
        onClick={() => setNum(num <= 1 ? 1 : num - 1)}
      >
        -
      </button>
      <h1 className="">{num}</h1>
      <button
        className="w-8 h-8  flex bg-slate-50 justify-center items-center border rounded-full"
        onClick={() => setNum(num + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;

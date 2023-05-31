import React from "react";

export default function Home() {
  return (
    <div className="bg-purple-100 p-56 flex ">
      {/* <h1 className='text-orange-700 '>Welcome to my page </h1> */}
      <div className="w-[33.3%] bg-emerald-600 h-52">
        <div className="w-[50%] text-center p-8  bg-rose-300 h-28 m-16">
          <h2>div 3</h2>
        </div>
      </div>
      <div className="w-[33.33%]  bg-emerald-200 h-52 m-14">
        <div className="w-[50%] text-center p-8 bg-yellow-400 h-28 m-16">
          <h2>div 3</h2>
        </div>
      </div>
      <div className="w-[33.33%]  bg-rose-300 h-52">
        <div className="w-[50%]  text-center p-8 bg-rose-500 h-28 m-16">
          <h2>div 3</h2>
        </div>
      </div>
    </div>
  );
}

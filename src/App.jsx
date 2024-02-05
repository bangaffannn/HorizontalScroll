import React from "react";

const list = ["New", "Hot", "Gaming", "Vlogs", "Unboxing", "Sport", "Gym", "Movies", "Coding"];

export default function App() {
  return (
    <div className="mx-auto flex flex-col justify-center max-w-screen-sm border">
      <h1 className="text-center text-2xl font-bold my-12">
        HORIZONTAL SCROLL
      </h1>

      <div>
        <ul className="flex flex-row gap-4 overflow-x-auto transition-all duration-300 ease-in-out">
          {list.map((item) => (
            <button className="px-3 py-1 bg-black hover:bg-gray-700 rounded-full text-white">
              {item}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

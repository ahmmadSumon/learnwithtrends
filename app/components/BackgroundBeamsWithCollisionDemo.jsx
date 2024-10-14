import React from "react";
import { BackgroundBeamsWithCollision } from "../../components/background-beams-with-collision";
export function BackgroundBeamsWithCollisionDemo() {
  return (
    (<BackgroundBeamsWithCollision>
      <h2
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
      Want best services?{" "}
        <div
          className="relative mx-auto inline-block hover:border-green-100 w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <button
            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Contact Us.</span>
          </button>
          <button
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Contact Us.</span>
          </button>
         
        </div>
      </h2>
      <br />
    
    </BackgroundBeamsWithCollision>)
  );
}

import React from "react";
import Nabar from "../home/Nabar";
import Navigation from "../home/Navigation";

export default function Agenda() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <Navigation />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Nabar />
          <div className="h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-row sm:flex-row bg-white ">
              <div className="overflow-auto h-screen w-full sm:w-1/4 xl:w-1/4 border-r-2">
                {/* <div className="bg-gray-100 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-6 my-6 overflow-x-hidden rounded-xl transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div className="text-black rounded p-1 text-sm mb-1">
                      <span>learn html css</span>
                    </div>
                  </div>
                </div> */}
                <div className="bg-gray-100 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-6 my-6 overflow-x-hidden rounded-xl transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                    <div className="text-black rounded p-1 text-sm mb-1">
                      <span className="pl-6 ">learn html css </span>
                      <span className="pl-6">10H30~11h30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-auto h-screen w-full">02</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

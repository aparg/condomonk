import React from "react";
import Image from "next/image";
import CardContent from "../../components/CardContent";

const page = async() => {

  const rentalData = await getFilteredRetsData({ saleLease: "Lease" });

  return (
    <div className="w-full h-full  text-white">
      <div className="flex flex-col md:flex-row gap-0 items-center justify-between bg-gray-900/90 lg:h-[600px]">
        <div className="textpart w-full md:w-[45%] flex flex-col items-start justify-center px-20 min-h-[216px]">
          <div className="mini-title text-sm font-light uppercase text-white">
            Unique Living
          </div>
          <div className="title text-3xl  my-2 playfair">
            How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch
            This!
          </div>
          <div className="subtitle font-light text-sm">
            At the very beginning of 2023, I published this video in response to
            news headlines saying “Record Number of Condos to Flood Toronto...
          </div>
        </div>
        <div className="imgpart w-full h-full md:w-[55%]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8`}
      >
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
      </div>
    </div>
  );
};

export default page;

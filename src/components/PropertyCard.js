import Link from "next/link";
import React from "react";
import { resenditial } from "../../api/routes";
import { saleLease } from "@/constant";
import { Image } from "react-bootstrap";

const PropertyCard = React.forwardRef(({ curElem, small = false }, ref) => {
  const mapObj = {
    MLS: curElem.MLS,
    index: 1,
  };
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `/noimage.webp`;
  };
  const imgSrc = resenditial.photos.replace(/MLS|index/gi, function (matched) {
    return mapObj[matched];
  });

  const price = Number(curElem.ListPrice).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return (
    <section className="text-black" ref={ref}>
      <Link href="/" className="text-black">
        <div className="lg:px-0 h-full w-full">
          <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group p-0 hover:shadow-lg hover:-translate-y-1 relative">
            <div
              className={`${small ? "h-44" : "h-80"} overflow-hidden relative`}
            >
              <div className="h-80 relative">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={imgSrc}
                  alt="property image"
                  onError={handleImageError}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div> */}
              </div>

              <div className="absolute bottom-3 left-2 flex flex-row">
                <div className="text-black text-[0.8rem] p-[2px] px-1 rounded-md mx-1 bg-white flex items-center">
                  {curElem.TypeOwn1Out}{" "}
                </div>
                <div className="text-black text-xs p-[2px] px-1 rounded-md mx-1 bg-white flex items-center">
                  {/* <TimeAgo modificationTimestamp={curElem.TimestampSql} /> */}
                </div>
              </div>
            </div>
            <div className="flex-1 sm:px-3 py-2 px-2">
              {/* {showDecreasedPrice && (
                <span className="text-gray-600">
                  <s>${curElem.MaxListPrice}</s>
                </span>
              )} */}
              <h2 className="price text-black fw-bold mb-1 fs-3 fw-bold d-flex align-items-center justify-content-between">
                <div className="flex flex-row items-center text-black">
                  {price}
                  {curElem.SaleLease === saleLease.lease.value && (
                    <span> /mo</span>
                  )}
                </div>
              </h2>
              <span className={`text-black text-xs ${small && "hidden"}`}>
                <div className="flex flex-row justify-start">
                  {curElem.Bedrooms && (
                    <div className="flex items-center mr-2">
                      <Image
                        src="/bedrooms.svg"
                        className="w-3 mr-[2px] inline"
                        alt="bedrooms"
                      />
                      <span>{Math.floor(curElem.Bedrooms)}</span>
                    </div>
                  )}
                  {curElem.Washrooms && (
                    <div className="flex items-center mr-2">
                      <Image
                        src="/bathrooms.svg"
                        className="w-3 mr-[2px] inline"
                        alt="washrooms"
                      />
                      <span>{Math.floor(curElem.Washrooms)}</span>
                    </div>
                  )}
                  {curElem.GarageSpaces && (
                    <div className="flex items-center mr-2">
                      <Image
                        src="/garage.svg"
                        className="w-3 mr-[2px] inline"
                        alt="washrooms"
                      />
                      <span>{Math.floor(curElem.GarageSpaces)}</span>
                    </div>
                  )}
                  {curElem.ApproxSquareFootage && (
                    <div className="flex items-center mr-2">
                      <Image
                        src="/ruler.svg"
                        className="w-3 mr-[2px] inline"
                        alt="washrooms"
                      />
                      <span>{curElem.ApproxSquareFootage} Sq.Ft.</span>
                    </div>
                  )}
                </div>
              </span>
              <div className="flex flex-row justify-between">
                <div className="text-black truncate text-ellipsis">
                  <div className="text-dark bva">
                    {curElem.StreetName ? (
                      `${curElem.Street} ${curElem.StreetName}${" "}
                    ${curElem.StreetAbbreviation} ${
                        curElem.Municipality
                      }, Ontario`
                    ) : (
                      <span className="p-4"></span>
                    )}
                  </div>
                </div>
              </div>
              {/* <div className="text-black font-medium truncate text-ellipsis text-xs">
                  Listed by {curElem.ListBrokerage}
                </div> */}
              <div className="inline-flex justify-center items-center mt-2">
                <div
                  className={`min-w-[50px] inline-flex item-center justify-center bg-[#3a88ef]/[0.08] hover:bg-[#3a88ef]/[0.2] rounded-md leading-7 py-[4px] px-[8px] text-xs mx-1`}
                >
                  <Image
                    className="pr-1 w-5"
                    src="/mailOutline.svg"
                    alt="Email"
                  />
                  Email
                </div>
                <div
                  className={`min-w-[70px] inline-flex item-center justify-center bg-[#ffedea]/[0.5] hover:bg-[#ffdad4]/[0.8] rounded-md leading-7 py-[4px] px-[8px] text-xs mx-1`}
                >
                  <Image className="pr-1 w-5" src="/phone.svg" alt="Phone" />
                  Phone
                </div>
                <div
                  className={`min-w-[70px] inline-flex item-center justify-center bg-[#43bb3f]/[0.1] hover:bg-[#43bb3f]/[0.2] rounded-md leading-7 py-[4px] px-[8px] text-xs mx-1`}
                >
                  <Image
                    className="pr-1 w-5"
                    src="/whatsapp.svg"
                    alt="whatsapp"
                  />
                  Whatsapp
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
});

export default PropertyCard;

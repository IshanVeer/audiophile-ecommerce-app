import Image from "next/image";
import React from "react";

const BrandDescription = () => {
  return (
    <div className="flex px-36 gap-34 my-36 items-center">
      {/* text */}
      <div className="w-2/5">
        <h1 className="h2-bold mb-8">
          Bringing you the <span className="text-primary-500">best</span> audio
          gear
        </h1>
        <p className="body text-dark-100/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      {/* image */}
      <div className="w-1/2 rounded-md overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="best-gear"
          height={1000}
          width={1000}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default BrandDescription;

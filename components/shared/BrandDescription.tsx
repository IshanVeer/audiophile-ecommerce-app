import Image from "next/image";
import React from "react";

const BrandDescription = () => {
  return (
    <div className="flex max-md:flex-col px-36 max-md:px-12 max-sm:px-8 gap-34 max-md:gap-16 my-36 max-sm:my-24 items-center">
      {/* text */}
      <div className="md:w-2/5 max-md:w-[600px] max-sm:w-full  max-md:text-center  max-md:order-2">
        <h1 className="h2-bold max-sm:h4-bold mb-8">
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
      <div className="md:w-1/2 max-md:w-full rounded-md overflow-hidden max-md:order1">
        {/* desktop and mobile */}
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="best-gear"
          height={1000}
          width={1000}
          className="w-full  max-md:hidden max-sm:block object-contain"
        />
        {/* tablet */}
        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          alt="best-gear"
          height={1000}
          width={1000}
          className="w-full md:hidden max-sm:hidden object-contain"
        />
      </div>
    </div>
  );
};

export default BrandDescription;

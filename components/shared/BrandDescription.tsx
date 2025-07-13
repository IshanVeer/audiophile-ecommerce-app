import Image from "next/image";
import React from "react";

const BrandDescription = () => {
  return (
    <div className="px-8 py-24">
      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="best-gear"
        height={1000}
        width={1000}
        className="rounded-md"
      />
      <div className="text-center mt-10">
        <h4 className="h4-bold">
          Bringing you the <span className="text-primary-500">best</span> audio
          gear
        </h4>
        <p className="body text-dark-100/50 mt-8">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default BrandDescription;

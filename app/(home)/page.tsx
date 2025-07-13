import Categories from "@/components/shared/Categories";
import Button from "@/components/ui/Button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="flex items-center py-30 sm:pt-36 sm:pb-54 bg-[url(/assets/home/mobile/image-header.jpg)] sm:bg-[url(/assets/home/tablet/image-header.jpg)] bg-no-repeat bg-center bg-cover">
        <div className="max-w-[328px] sm:max-w-[400px] mx-auto text-center">
          <p className="subtitle-overline text-light-100/50 pb-4 sm:pb-6">
            NEW PRODUCT
          </p>
          <h1 className="h1-mobile-bold sm:h1-bold text-light-100 pb-6">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="body text-white/50 pb-10 sm:max-w-[350px] mx-auto">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button label="See Product" isLink route="/" />
        </div>
      </section>

      {/* category section */}
      <section className="px-6 sm:px-10 py-24">
        <Categories />
      </section>

      {/* product section */}
      <section className="px-6 sm:px-10">
        {/* product 1 */}
        <div className="flex flex-col gap-12 mb-6  items-center  relative overflow-hidden  bg-primary-500 py-20 rounded-md">
          <div>
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              alt="pattern-circle"
              height={500}
              width={500}
              className="w-full absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
          </div>

          {/* product image */}
          <div className="z-10 ">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="speaker-zx9"
              height={500}
              width={500}
              className="max-w-[180px]"
            />
          </div>
          {/* text container */}
          <div className="max-w-[280px] sm:max-w-[350px]  text-center">
            <h2 className="h1-mobile-bold text-light-100 pb-6 w-1/2 mx-auto">
              ZX9 SPEAKER
            </h2>
            <p className="body text-light-100/75 pb-8 sm:pb-12">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              className="bg-dark-100 text-[13px] text-light-100 font-bold leading-[18px] tacking-[1px] uppercase border border-dark-100 px-9 py-3.5 hover:bg-[#4c4c4c] transition duration-150"
              href="/"
            >
              See product
            </Link>
          </div>
        </div>
        {/* product 2 */}
        <div className="py-28 px-6 mb-6 bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] sm:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)] bg-no-repeat bg-center bg-cover rounded-md">
          <div>
            <h4 className="h4-bold mb-8">ZX7 SPEAKER</h4>
            <Button
              label="See product"
              isLink
              route="/"
              buttonStyle="secondary"
            />
          </div>
        </div>

        {/* product 3 */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            height={500}
            width={500}
            className="rounded-md sm:w-1/2 sm:hidden"
          />
          <Image
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="earphones-yx1"
            height={500}
            width={500}
            className="rounded-md sm:w-1/2 max-sm:hidden"
          />
          <div className="bg-light-200 flex items-center py-14 px-6 rounded-md sm:w-1/2">
            <div>
              <h4 className="h4-bold mb-8">YX1 EARPHONES</h4>
              <Button
                label="See product"
                isLink
                route="/"
                buttonStyle="secondary"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

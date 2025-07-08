import Categories from "@/components/shared/Categories";
import Button from "@/components/ui/Button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}

      <section className="px-36 h-[650px]  bg-dark-100">
        <div className="flex items-center h-full  gap-20 border-none">
          {/* text container */}
          <div className="text-light-100 w-2/5 flex flex-col items-start gap-6">
            <p className="subtitle-overline text-light-100/50">NEW PRODUCT</p>
            <h1 className="h1-bold">XX99 Mark II Headphones</h1>
            <p className="body w-[349px] pb-4">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button label="See Product" route="/" isLink />
          </div>
          {/* image container */}
          <div className="w-3/5 h-full">
            {" "}
            <Image
              src="/assets/home/desktop/image-hero.jpg"
              alt="hero-image"
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Categories section */}
      <section className="px-36 py-28">
        <Categories />
      </section>
      {/* product section */}
      <section className="px-36">
        {/* product 1 */}
        <div className="flex relative overflow-hidden items-start px-28 pt-28 rounded-md bg-primary-500">
          {/* background pattern */}
          <div>
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              alt="pattern-circle"
              height={500}
              width={500}
              className="absolute w-5xl -top-12 -left-47 z-0"
            />
          </div>
          {/* product image */}
          <div className="z-10 w-[420px] -mb-3">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="image-speaker-zx9"
              height={500}
              width={500}
              className="w-full"
            />
          </div>
          {/* text container */}

          <div className="z-10 w-[450px] mt-6 pl-36 text-light-100">
            <h2 className="h1-bold">ZX9 SPEAKER</h2>
            <p className="body py-8">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              className="bg-dark-100 text-[13px] leading-[18px] uppercase border border-dark-100 px-6 py-2 hover:bg-[#4c4c4c] transition duration-150"
              href="/"
            >
              See product
            </Link>
          </div>
        </div>
        {/* product 2 */}
        <div className="h-[320px] rounded-md my-6 flex items-center px-20  bg-no-repeat bg-cover bg-center w-full bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]">
          <div>
            <h4 className="h4-bold mb-8">ZX7 SPEAKER</h4>
            <Button buttonStyle="secondary" label="See Product" />
          </div>
        </div>
        {/* product 3 */}
        <div className="flex gap-6">
          {/* image  */}
          <div className="w-1/2 rounded-md overflow-hidden">
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="earphones-yx1"
              height={500}
              width={500}
              className="w-full object-cover"
            />
          </div>

          {/* text */}
          <div className="w-1/2 px-20 flex items-center rounded-md bg-light-200">
            <div className="">
              <h4 className="h4-bold mb-8">YX1 EARPHONES</h4>
              <Button buttonStyle="secondary" label="See Product" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

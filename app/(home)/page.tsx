import Button from "@/components/ui/Button";
import Image from "next/image";

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
    </>
  );
}

"use client";
import { productData } from "@/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const ProductDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const individualProduct = productData.find(
    (product) => product.slug === slug
  );

  return (
    <div className="section-container">
      <button onClick={() => router.back()}>Go back</button>
      {individualProduct && (
        <main>
          {/* product purrchase section */}
          <section className="flex flex-col pb-22">
            <Image
              src={individualProduct.image.mobile}
              alt={individualProduct.name}
              height={1000}
              width={1000}
              className="pb-9"
            />
            <div>
              {individualProduct.new && (
                <p className="subtitle-overline text-primary-500">
                  NEW PRODUCT
                </p>
              )}
              <h2 className="h4-bold py-9">{individualProduct.name}</h2>
              <p className="body text-dark-100/50">
                {individualProduct.description}
              </p>
              <p className="h6-bold py-9">{`$${individualProduct.price}`}</p>
              <div>buttons</div>
            </div>
          </section>
          {/* product features section */}

          <section className="pb-22">
            <h2 className="h4-bold pb-9">Features</h2>
            <div className="body text-dark-100/50">
              {individualProduct.features}
            </div>
          </section>

          {/* in the box section */}
          <section>
            <h2 className="h4-bold">in the box</h2>
            <ul className="pt-9 flex flex-col gap-4">
              {individualProduct.includes.map((include) => (
                <li className="flex items-center gap-5" key={include.item}>
                  <p className="text-[15px] font-bold text-primary-500">{`${include.quantity}x`}</p>
                  <p className="body text-dark-100/50">{include.item}</p>
                </li>
              ))}
            </ul>
          </section>
          {/* gallery */}
          <section>
            {/* first image */}
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.gallery.first.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.gallery.first.tablet}
              />
              <Image
                src={individualProduct.gallery.first.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
              />
            </picture>
            {/* second image */}
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.gallery.second.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.gallery.second.tablet}
              />
              <Image
                src={individualProduct.gallery.second.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
              />
            </picture>
            {/* third image */}
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={individualProduct.gallery.third.desktop}
              />
              <source
                media="(min-width:640px)"
                srcSet={individualProduct.gallery.third.tablet}
              />
              <Image
                src={individualProduct.gallery.third.mobile}
                alt={individualProduct.name}
                height={1000}
                width={1000}
              />
            </picture>
          </section>
        </main>
      )}
    </div>
  );
};

export default ProductDetail;

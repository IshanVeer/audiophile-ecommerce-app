import React from "react";
import css from "./Categories.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import categoryPreviewHeadphones from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import categoryPreviewSpeakers from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import categoryPreviewEarphones from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

export const Categories = () => {
  return (
    <div>
      <div className={css.categoriesContainer}>
        <ul className={css.categoriesList}>
          {/* list item 1 */}
          <li className={css.categoriesListItem}>
            <div className={css.categoriesListItemLinkContainer}>
              <Image
                src={categoryPreviewHeadphones}
                alt="headphones"
                className={css.categoriesListItemLinkImage}
              />
              <h6 className={css.categoriesListHeading}>Headphones</h6>
              <Link href="/headphones" className={css.categoriesListItemLink}>
                Shop <BsChevronRight />
              </Link>
            </div>
          </li>
          {/* list item 2 */}
          <li className={css.categoriesListItem}>
            <div className={css.categoriesListItemLinkContainer}>
              <Image
                src={categoryPreviewSpeakers}
                alt="headphones"
                className={css.categoriesListItemLinkImage}
              />
              <h6 className={css.categoriesListHeading}>Speakers</h6>
              <Link href="/headphones" className={css.categoriesListItemLink}>
                Shop <BsChevronRight />
              </Link>
            </div>
          </li>
          {/* list item 3 */}
          <li className={css.categoriesListItem}>
            <div className={css.categoriesListItemLinkContainer}>
              <Image
                src={categoryPreviewEarphones}
                alt="headphones"
                className={css.categoriesListItemLinkImage}
              />
              
              <h6 className={css.categoriesListHeading}>Earphones</h6>
              <Link href="/headphones" className={css.categoriesListItemLink}>
                Shop <BsChevronRight />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

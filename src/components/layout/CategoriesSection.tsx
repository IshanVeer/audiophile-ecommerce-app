import React from "react";
import css from "./CategoriesSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { BiSolidChevronRight } from "react-icons/bi";
import categoryPreviewHeadphones from "../../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.png";
import categoryPreviewSpeakers from "../../../public/assets/product-zx9-speaker/desktop/image-category-page-preview.png";
import categoryPreviewEarphones from "../../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.png";



const CategoriesSection = () => {
  return (
    <div>
      <div className={css.categoriesSectionContainer}>
        <ul className={css.categoriesList}>
          
          {/* list item 1 */}
          <li className={css.categoriesListItem}>
            <div className={css.categoriesListItemLinkContainer}>
              <Image
                src={categoryPreviewHeadphones}
                alt="headphones"
                className={css.categoriesListItemLinkImage}
              />
              <div className={css.categoriesListItemLinkContent}>
                <h6 className={css.categoriesListHeading}>Headphones</h6>
                <Link href="/headphones" className={css.categoriesListItemLink}>
                  Shop{" "}
                  <BiSolidChevronRight
                    className={css.categoriesListItemLinkIcon}
                  />
                </Link>
              </div>
            </div>
          </li>
          {/* list item 2 */}
          <li className={css.categoriesListItem}>
            <div className={css.categoriesListItemLinkContainer}>
              <Image
                src={categoryPreviewSpeakers}
                alt="speakers"
                className={css.categoriesListItemLinkImage}
              />
              <div className={css.categoriesListItemLinkContent}>
                <h6 className={css.categoriesListHeading}>Speakers</h6>
                <Link href="/speakers" className={css.categoriesListItemLink}>
                  Shop{" "}
                  <BiSolidChevronRight
                    className={css.categoriesListItemLinkIcon}
                  />
                </Link>
              </div>
            </div>
          </li>
          {/* list item 3 */}
          <li className={css.categoriesListItem}>
            <div className={css.categoriesListItemLinkContainer}>
              <Image
                src={categoryPreviewEarphones}
                alt="earphones"
                className={css.categoriesListItemLinkImage}
              />

              <div className={css.categoriesListItemLinkContent}>
                <h6 className={css.categoriesListHeading}>Earphones</h6>
                <Link href="/headphones" className={css.categoriesListItemLink}>
                  Shop{" "}
                  <BiSolidChevronRight
                    className={css.categoriesListItemLinkIcon}
                  />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesSection;

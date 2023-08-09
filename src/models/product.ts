import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  _id: { type: String },
  slug: { type: String },
  name: { type: String },
  image: {
    mobile: { type: String },
    tablet: { type: String },
    desktop: { type: String },
  },
  category: { type: String },
  categoryImage: {
    mobile: { type: String },
    tablet: { type: String },
    desktop: { type: String },
  },
  new: { type: Boolean },
  price: { type: Number },
  description: { type: String },
  features: { type: String },
  includes: [
    {
      quantity: { type: Number },
      item: { type: String },
    },
  ],
  gallery: {
    first: {
      mobile: { type: String },
      tablet: { type: String },
      desktop: { type: String },
    },
    second: {
      mobile: { type: String },
      tablet: { type: String },
      desktop: { type: String },
    },
    third: {
      mobile: { type: String },
      tablet: { type: String },
      desktop: { type: String },
    },
  },
  others: [
    {
      slug: { type: String },
      name: { type: String },
      image: {
        mobile: { type: String },
        tablet: { type: String },
        desktop: { type: String },
      },
    },
  ],
});
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

  export default Product;

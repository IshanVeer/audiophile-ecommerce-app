import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    const {
      slug,
      name,
      image,
      category,
      categoryImage,
      new: isNew,
      price,
      description,
      features,
      includes,
      gallery,
      others,
    } = await req.json();
  
    await connectMongoDB();
    await Product.create({slug,
      name,
      image,
      category,
      categoryImage,
      new: isNew,
      price,
      description,
      features,
      includes,
      gallery,
      others,});
  
      return NextResponse.json({ message: "Product created" },{status:201});
  
  }

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();

  return NextResponse.json({ products });
}

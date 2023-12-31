import connectMongoDB from "@/utils/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();

  return NextResponse.json({ products });
}

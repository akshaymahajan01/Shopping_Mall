import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {

    await mongoose.connect("mongodb+srv://akshaymahajan065:Aksh%40y2002@shoppingmall.dpxo07w.mongodb.net/?retryWrites=true&w=majority&appName=ShoppingMall");

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();



import mongoose from "mongoose";

export const connectDB = async () => {
	await mongoose.connect("mongodb+srv://fstephenmeycelino:15091509@cluster0.zh00pad.mongodb.net/food-delivery").then(()=>console.log("DB Connected"))
}
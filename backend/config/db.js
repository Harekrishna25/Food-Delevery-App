import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harekrishna25:harekrishna25@cluster0.vgrhzwj.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
}
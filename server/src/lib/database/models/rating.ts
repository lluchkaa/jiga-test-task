import mongoose from "mongoose"

const RatingSchema = new mongoose.Schema({
  rating: { type: String },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
})

export const Rating = mongoose.model("Rating", RatingSchema)

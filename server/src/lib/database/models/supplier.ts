import mongoose from "mongoose"

const SupplierSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String },
})

export const Supplier = mongoose.model("Supplier", SupplierSchema)

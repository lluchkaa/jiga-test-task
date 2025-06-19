import mongoose from "mongoose"

const QuoteOfferItemSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  unitPrice: { type: Number },
  quantity: { type: Number },
})

const QuoteOfferSchema = new mongoose.Schema({
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  items: [QuoteOfferItemSchema],
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  leadTime: { type: Number },
})

const QuoteSchema = new mongoose.Schema({
  customerName: { type: String },
  offers: [QuoteOfferSchema],
})

export const Quote = mongoose.model("Quote", QuoteSchema)

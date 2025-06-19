import { z } from "zod"

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
})
export type Item = z.infer<typeof ItemSchema>

export const OfferSchema = z.object({
  unitPrice: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
})
export type Offer = z.infer<typeof OfferSchema>

export const ItemOfferSchema = z.object({
  itemId: z.string(),
  minPrice: z.number().nonnegative(),
  maxPrice: z.number().nonnegative(),
  offers: z.record(z.string(), OfferSchema),
})
export type ItemOffer = z.infer<typeof ItemOfferSchema>

export const SupplierSchema = z.object({
  id: z.string(),
  name: z.string(),
  country: z.string(),
  rating: z.number().min(0).max(5),
  shippingPrice: z.number().nonnegative(),
  leadTime: z.number().nonnegative(),
  totalPrice: z.number().nonnegative(),
  score: z.number().nonnegative(),
})
export type Supplier = z.infer<typeof SupplierSchema>

export const QuoteComparisonSchema = z.object({
  items: z.array(ItemSchema),
  itemOffers: z.array(ItemOfferSchema),
  suppliers: z.array(SupplierSchema),
})
export type QuoteComparison = z.infer<typeof QuoteComparisonSchema>

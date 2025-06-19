import { Quote } from "~/lib/database/models"

export function getQuotesComparison(quoteId: string) {
  const itemsAggregators = [
    {
      $lookup: {
        from: "items",
        localField: "offers.items.itemId",
        foreignField: "_id",
        as: "item",
      },
    },
    { $unwind: "$item" },
    { $group: { _id: "$item._id", name: { $first: "$item.name" } } },
    { $project: { _id: 0, id: "$_id", name: 1 } },
  ]

  const offersAggregators = [
    {
      $group: {
        _id: "$offers.items.itemId",
        offers: {
          $push: {
            k: "$offers.supplierId",
            v: {
              unitPrice: "$offers.items.unitPrice",
              quantity: "$offers.items.quantity",
            },
          },
        },
      },
    },
    { $project: { _id: 0, id: "$_id", offers: { $arrayToObject: "$offers" } } },
  ]

  const suppliersAggregators = [
    {
      $lookup: {
        from: "suppliers",
        localField: "offers.supplierId",
        foreignField: "_id",
        as: "supplier",
      },
    },
    { $unwind: "$supplier" },
    {
      $lookup: {
        from: "ratings",
        localField: "supplier._id",
        foreignField: "supplierId",
        as: "rating",
      },
    },
    { $unwind: "$rating" },
    {
      $group: {
        _id: "$supplier._id",
        name: { $first: "$supplier.name" },
        country: { $first: "$supplier.country" },
        rating: { $first: "$rating.rating" },
        shippingPrice: { $first: "$offers.shippingPrice" },
        leadTime: { $first: "$offers.leadTime" },
        totalPrice: { $first: "$offers.totalPrice" },
        score: {
          $sum: {
            $add: [
              { $divide: ["$offers.items.unitPrice", 1000] },
              { $divide: ["$offers.shippingPrice", 100] },
              { $divide: ["$offers.leadTime", 30] },
              { $subtract: [1, { $divide: ["$rating.rating", 5] }] },
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        id: "$_id",
        name: 1,
        country: 1,
        rating: 1,
        shippingPrice: 1,
        leadTime: 1,
        totalPrice: 1,
        score: 1,
      },
    },
  ]

  return Quote.aggregate([
    { $match: { _id: quoteId } },
    { $unwind: { path: "$offers" } },
    { $unwind: { path: "$offers.items" } },
    {
      $facet: {
        items: itemsAggregators,
        offers: offersAggregators,
        suppliers: suppliersAggregators,
      },
    },
  ])
}

import { RequestHandler } from "express"

import { getQuotesComparison } from "./service"

export const quoteComparisonController: RequestHandler = async (req, res) => {
  const quoteId = req.query.quoteId as string
  const removedItemIdsRaw = req.query["removedItemIds[]"] as
    | string[]
    | string
    | undefined

  const removedItemIds = Array.isArray(removedItemIdsRaw)
    ? removedItemIdsRaw
    : removedItemIdsRaw
      ? [removedItemIdsRaw]
      : []

  if (!quoteId) {
    res.status(400).json({ error: "Quote ID is required" })
    return
  }

  const quotesComparison = await getQuotesComparison(quoteId, removedItemIds)

  if (!quotesComparison) {
    res.status(404).json({ error: "Quote not found" })
    return
  }

  res.json(quotesComparison)
}

import { RequestHandler } from "express"

import { getQuotesComparison } from "./service"

export const quoteComparisonController: RequestHandler = async (req, res) => {
  const quoteId = req.query.quoteId as string

  if (!quoteId) {
    res.status(400).json({ error: "Quote ID is required" })
    return
  }

  const quotesComparison = await getQuotesComparison(quoteId)

  if (!quotesComparison) {
    res.status(404).json({ error: "Quote not found" })
    return
  }

  res.json(quotesComparison)
}

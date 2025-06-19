import { RequestHandler } from "express"

import { getQuotesComparison } from "./service"

export const quoteComparisonController: RequestHandler = async (req, res) => {
  const quoteId = req.query.quoteId as string

  if (!quoteId) {
    res.status(400).json({ error: "Quote ID is required" })
    return
  }

  const quotesComparison = await getQuotesComparison(quoteId)

  res.json(quotesComparison)
}

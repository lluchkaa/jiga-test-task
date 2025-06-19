import { RequestHandler } from "express"

export const quoteComparisonController: RequestHandler = (_req, res) => {
  res.json({ ok: true })
}

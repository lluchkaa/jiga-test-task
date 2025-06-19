import express from "express"

import { quoteComparisonController } from "./controller"

export const quoteComparisonRouter = express.Router()

quoteComparisonRouter.get("/quote-comparison", quoteComparisonController)

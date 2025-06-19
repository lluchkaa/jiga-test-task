import express from "express"
import morgan from "morgan"

import { errorHandler } from "~/lib/error"
import { quoteComparisonRouter } from "~/quote-comparison"

export function bootstrap() {
  const app = express()

  app.use(morgan("common"))

  app.use(quoteComparisonRouter)

  app.use(errorHandler)

  return app
}

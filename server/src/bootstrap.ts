import cors from "cors"
import express from "express"
import morgan from "morgan"

import { env } from "~/lib/env"
import { errorHandler } from "~/lib/error"

import { quoteComparisonRouter } from "~/quote-comparison"

export function bootstrap() {
  const app = express()

  app.use(morgan("common"))
  app.use(cors({ origin: env.ALLOWED_ORIGINS }))

  app.use(quoteComparisonRouter)

  app.use(errorHandler)

  return app
}

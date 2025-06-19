import express from "express"
import morgan from "morgan"

import { errorHandler } from "~/lib/error"

export function bootstrap() {
  const app = express()

  app.use(morgan("common"))

  app.use(errorHandler)

  return app
}

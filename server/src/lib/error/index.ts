import { ErrorRequestHandler } from "express"

export const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  console.error(err)
  res.status(500).json({
    message: "An unexpected error occurred",
  })
}

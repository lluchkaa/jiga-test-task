import { connect } from "mongoose"

import { env } from "~/lib/env"

export function connectToDatabase() {
  return connect(env.DATABASE_URL, {
    dbName: env.DATABASE_NAME,
  })
}

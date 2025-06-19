import { env } from "~/lib/env"
import { connectToDatabase } from "~/lib/database"

import { bootstrap } from "~/bootstrap"

async function main() {
  await connectToDatabase()

  const app = bootstrap()

  app.listen(env.PORT, (error) => {
    if (error) {
      console.error("Error starting the server:", error)
      process.exit(1)
    }
    console.log(`Server is running on port ${String(env.PORT)}`)
  })
}

main().catch(console.error)

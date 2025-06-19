import { env } from "~/lib/env"
import { bootstrap } from "~/bootstrap"
import { connectToDatabase } from "./lib/database"

async function main() {
  await connectToDatabase()

  const app = bootstrap()

  app.listen(env.PORT, (error) => {
    if (error) {
      console.error("Error starting the server:", error)
      process.exit(1)
    }
    console.log(`Server is running on port ${env.PORT}`)
  })
}

main()

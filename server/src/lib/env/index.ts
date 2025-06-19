/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-namespace */
import { config as dotenvConfig } from "dotenv"
import { z } from "zod"

dotenvConfig()

const envSchema = z.object({
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string().url(),
  DATABASE_NAME: z.string().default("task"),

  ALLOWED_ORIGINS: z
    .string()
    .transform((value) => value.split(","))
    .pipe(z.array(z.string().url())),
})

export const env = envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

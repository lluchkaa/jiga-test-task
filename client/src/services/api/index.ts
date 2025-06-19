import axios from "axios"

import { env } from "~/lib/env"

export const api = axios.create({
  baseURL: env.API_BASE_URL,
  adapter: ["fetch", "xhr", "http"],
})

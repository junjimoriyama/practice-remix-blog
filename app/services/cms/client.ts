import { createClient } from "microcms-js-sdk"

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not defined");
}

export const client = createClient({
  serviceDomain: "morijun",
  apiKey: process.env.MICROCMS_API_KEY
})
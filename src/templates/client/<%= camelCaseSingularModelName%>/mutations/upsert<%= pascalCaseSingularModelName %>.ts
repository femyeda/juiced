import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const upsert<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>UpsertArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/upsert`).send({ data: args })

  return response.body.data
}

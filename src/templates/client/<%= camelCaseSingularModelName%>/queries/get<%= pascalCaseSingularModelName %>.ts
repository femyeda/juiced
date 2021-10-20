import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const get<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>FindUniqueArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/get`).send({ data: args })

  return response.body.data
}

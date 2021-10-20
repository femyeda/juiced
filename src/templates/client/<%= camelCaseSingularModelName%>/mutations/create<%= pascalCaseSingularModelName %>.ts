import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const create<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>CreateArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/create`).send({ data: args })

  return response.body.data
}

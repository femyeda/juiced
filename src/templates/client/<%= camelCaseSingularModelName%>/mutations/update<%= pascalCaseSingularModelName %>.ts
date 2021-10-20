import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const update<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>UpdateArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/update`).send({ data: args })

  return response.body.data
}

import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const delete<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>DeleteArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/delete`).send({ data: args })

  return response.body.data
}

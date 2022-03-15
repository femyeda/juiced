import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const delete<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>DeleteArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.delete>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/delete`)
    .send({ data: args })

  return response.body.data
}

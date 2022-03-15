import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const get<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>FindUniqueArgs
):  Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.findUnique>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/get`)
    .send({ data: args })

  return response.body.data
}

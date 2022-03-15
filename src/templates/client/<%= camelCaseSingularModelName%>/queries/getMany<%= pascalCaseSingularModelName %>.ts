import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const getMany<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>FindManyArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.findMany>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/getMany`)
    .send({ data: args })

  return response.body.data
}

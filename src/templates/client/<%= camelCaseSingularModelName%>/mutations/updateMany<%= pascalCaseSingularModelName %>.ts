import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const updateMany<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>UpdateManyArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.updateMany>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/updateMany`)
    .send({ data: args })

  return response.body.data
}

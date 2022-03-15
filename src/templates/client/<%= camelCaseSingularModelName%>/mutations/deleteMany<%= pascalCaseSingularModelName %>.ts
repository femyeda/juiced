import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const deleteMany<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>DeleteManyArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.deleteMany>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/deleteMany`)
    .send({ data: args })

  return response.body.data
}

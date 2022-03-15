import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const create<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>CreateArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.create>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/create`)
    .send({ data: args })

  return response.body.data
}

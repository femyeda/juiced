import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const update<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>UpdateArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.update>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/update`)
    .send({ data: args })

  return response.body.data
}

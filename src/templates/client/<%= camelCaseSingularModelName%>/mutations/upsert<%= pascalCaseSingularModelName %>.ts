import superagent from "superagent"

import prisma, { Prisma } from "@db/index"

import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const upsert<%= pascalCaseSingularModelName %> = async (
  args: Prisma.<%= pascalCaseSingularModelName %>UpsertArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.upsert>> => {
  const response = await superagent
    .post(`${<%= snakeUpperCaseModelName %>_API_URL}/upsert`)
    .send({ data: args })

  return response.body.data
}

import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const deleteMany<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>DeleteManyArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/deleteMany`).send({ data: args })

  return response.body.data
}

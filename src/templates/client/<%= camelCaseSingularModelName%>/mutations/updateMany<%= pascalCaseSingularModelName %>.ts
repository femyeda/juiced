import { Prisma } from "@db/index"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const updateMany<%= pascalCaseSingularModelName %> = async (args: Prisma.<%= pascalCaseSingularModelName %>UpdateManyArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/updateMany`).send({ data: args })

  return response.body.data
}

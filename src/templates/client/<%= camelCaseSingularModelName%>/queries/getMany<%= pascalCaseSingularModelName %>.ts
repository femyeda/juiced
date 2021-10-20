import { <%= pascalCaseSingularModelName %>FindManyArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= snakeUpperCaseModelName %>_API_URL } from ".."

export const getMany<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>FindManyArgs) => {
  const response = await superagent.post(`${<%= snakeUpperCaseModelName %>_API_URL}/getMany`).send({ data: args })

  return response.body.data
}

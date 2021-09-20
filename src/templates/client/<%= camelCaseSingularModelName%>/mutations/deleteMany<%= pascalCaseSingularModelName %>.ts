import { <%= pascalCaseSingularModelName %>DeleteManyArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const deleteMany<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>DeleteManyArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/deleteMany`).send({ data: args })

  return response.body.data
}

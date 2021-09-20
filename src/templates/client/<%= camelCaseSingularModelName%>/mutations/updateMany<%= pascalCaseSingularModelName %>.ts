import { <%= pascalCaseSingularModelName %>UpdateManyArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const updateMany<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>UpdateManyArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/updateMany`).send({ data: args })

  return response.body.data
}

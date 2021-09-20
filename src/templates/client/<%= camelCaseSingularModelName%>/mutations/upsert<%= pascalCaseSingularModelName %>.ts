import { <%= pascalCaseSingularModelName %>UpsertArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const upsert<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>UpsertArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/upsert`).send({ data: args })

  return response.body.data
}

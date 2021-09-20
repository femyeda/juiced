import { <%= pascalCaseSingularModelName %>FindUniqueArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const get<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>FindUniqueArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/get`).send({ data: args })

  return response.body.data
}

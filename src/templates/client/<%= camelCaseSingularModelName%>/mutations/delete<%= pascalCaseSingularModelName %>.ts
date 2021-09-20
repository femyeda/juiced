import { <%= pascalCaseSingularModelName %>DeleteArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const delete<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>DeleteArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/delete`).send({ data: args })

  return response.body.data
}

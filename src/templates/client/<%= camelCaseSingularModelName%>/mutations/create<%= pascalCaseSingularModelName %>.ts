import { <%= pascalCaseSingularModelName %>CreateArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const create<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>CreateArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/create`).send({ data: args })

  return response.body.data
}

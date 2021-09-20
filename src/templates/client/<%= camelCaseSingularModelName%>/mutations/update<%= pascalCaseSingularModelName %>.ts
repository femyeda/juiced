import { <%= pascalCaseSingularModelName %>UpdateArgs } from "@prisma/client"
import superagent from "superagent"
import { <%= upperCaseModelName %>_API_URL } from ".."

export const update<%= pascalCaseSingularModelName %> = async (args: <%= pascalCaseSingularModelName %>UpdateArgs) => {
  const response = await superagent.post(`${<%= upperCaseModelName %>_API_URL}/update`).send({ data: args })

  return response.body.data
}

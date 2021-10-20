export const <%= snakeUpperCaseModelName %>_API_URL = "/api/<%= camelCaseSingularModelName %>"

export * from "./mutations/create<%= pascalCaseSingularModelName %>"
export * from "./mutations/delete<%= pascalCaseSingularModelName %>"
export * from "./mutations/deleteMany<%= pascalCaseSingularModelName %>"
export * from "./mutations/update<%= pascalCaseSingularModelName %>"
export * from "./mutations/updateMany<%= pascalCaseSingularModelName %>"
export * from "./mutations/upsert<%= pascalCaseSingularModelName %>"

export * from "./queries/get<%= pascalCaseSingularModelName %>"
export * from "./queries/getMany<%= pascalCaseSingularModelName %>"
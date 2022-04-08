import isEmpty from "lodash/isEmpty"
import { NextApiResponse } from "next"
import nc from "next-connect"

import { Prisma } from "@db/index"

import { authenticationMiddleware } from "@api/_middleware/_authentication"
import cors from "@api/_middleware/_cors"

import { AuthenticatedApiRequest } from "@lib/types"

import { _getMany<%= pascalCaseSingularModelName%> } from "./_operations"

const post = async (req: AuthenticatedApiRequest, res: NextApiResponse) => {
  const { data } = req.body

  const whereInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["where"] = isEmpty(data.where)
    ? undefined
    : data.where

  const selectInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["select"] = isEmpty(data.select)
    ? undefined
    : data.select

  const includeInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["include"] = isEmpty(data.include)
    ? undefined
    : data.include

  const orderByInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["orderBy"] = isEmpty(data.orderBy)
    ? undefined
    : data.orderBy

  const cursorInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["cursor"] = isEmpty(data.cursor)
    ? undefined
    : data.cursor

  const takeInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["take"] = isEmpty(data.take) ? undefined : data.take

  const skipInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["skip"] = isEmpty(data.skip) ? undefined : data.skip

  const distinctInput: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs["distinct"] = isEmpty(data.distinct)
    ? undefined
    : data.distinct

  // TODO: Validation should be done with Zod
  if (!isEmpty(selectInput) && !isEmpty(includeInput)) {
    return res.status(422).json({
      message: "Please either use `include` or `select`, but not both at the same time.",
    })
  }

  const findManyArgs: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs = {
    select: selectInput,
    where: whereInput,
    include: includeInput,
    orderBy: orderByInput,
    cursor: cursorInput,
    take: takeInput,
    skip: skipInput,
    distinct: distinctInput,
  }

  try {
    const <%= camelCasePluralModelName%> = await _getMany<%= pascalCaseSingularModelName%>(findManyArgs)

    return res.status(200).json({data: <%= camelCasePluralModelName%>})
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/getMany", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc().use(cors).use(authenticationMiddleware).post(post);
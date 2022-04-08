import { subject } from "@casl/ability"
import { Prisma } from "@prisma/client"
import isEmpty from "lodash/isEmpty"
import { NextApiResponse } from "next"
import nc from "next-connect"

import { authenticationMiddleware } from "@api/_middleware/_authentication"
import cors from "@api/_middleware/_cors"

import { AuthenticatedApiRequest } from "@lib/types"

import { Define<%= pascalCaseSingularModelName%>Abilities, _get<%= pascalCaseSingularModelName%> } from './_operations'

const post = async (req: AuthenticatedApiRequest, res: NextApiResponse) => {
  const { data } = req.body

  if (!data) {
    return res.status(422).json({
      message: "Missing request data.",
    })
  }

  const whereInput: Prisma.<%= pascalCaseSingularModelName%>FindUniqueArgs["where"] = isEmpty(data.where)
    ? undefined
    : data.where

  const selectInput: Prisma.<%= pascalCaseSingularModelName%>FindUniqueArgs["select"] = isEmpty(data.select)
    ? undefined
    : data.select

  const includeInput: Prisma.<%= pascalCaseSingularModelName%>FindUniqueArgs["include"] = isEmpty(data.include)
    ? undefined
    : data.include

  // TODO: Validation should be done with Zod
  if (isEmpty(whereInput)) {
    return res.status(422).json({
      message: "Missing get data",
    })
  }

  if (!isEmpty(selectInput) && !isEmpty(includeInput)) {
    return res.status(422).json({
      message: "Please either use `include` or `select`, but not both at the same time.",
    })
  }

  const findUniqueArgs: Prisma.<%= pascalCaseSingularModelName%>FindUniqueArgs = {
    select: selectInput,
    where: whereInput,
    include: includeInput,
  }

  try {
    const <%= camelCaseSingularModelName%> = await _get<%= pascalCaseSingularModelName%>(findUniqueArgs)

    return res.status(200).json({ data: <%= camelCaseSingularModelName%> })
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/get", error)
    return res.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default nc().use(cors).use(authenticationMiddleware).post(post);
import { subject } from "@casl/ability"
import isEmpty from "lodash/isEmpty"
import { NextApiResponse } from "next"
import nc from "next-connect"

import { Prisma } from "@db/index"

import { authenticationMiddleware } from "@api/_middleware/_authentication"
import cors from "@api/_middleware/_cors"

import { AuthenticatedApiRequest } from "@lib/types"

import {
  Define<%= pascalCaseSingularModelName%>Abilities,
  _update<%= pascalCaseSingularModelName%>,
  _get<%= pascalCaseSingularModelName%>
} from "./_operations"

const post = async (req: AuthenticatedApiRequest, res: NextApiResponse) => {
  const { data } = req.body

  if (!data) {
    return res.status(422).json({
      message: "Missing request data.",
    })
  }

  try {
    const abilities = Define<%= pascalCaseSingularModelName%>Abilities({ accountId: req.accountId })

    if (!abilities.can("update", subject("<%= pascalCaseSingularModelName%>", { accountId: req.accountId }))) {
      return res.status(401).json({
        message: "Unauthorized to update this <%= camelCaseSingularModelName%>.",
      })
    }
    const whereInput: Prisma.<%= pascalCaseSingularModelName%>UpdateArgs["where"] = isEmpty(data.where)
    ? undefined
    : data.where

    const updateInput: Prisma.<%= pascalCaseSingularModelName%>UpdateArgs["data"] = isEmpty(data.data) ? undefined : data.data

    const selectInput: Prisma.<%= pascalCaseSingularModelName%>UpdateArgs["select"] = isEmpty(data.select)
      ? undefined
      : data.select

    const includeInput: Prisma.<%= pascalCaseSingularModelName%>UpdateArgs["include"] = isEmpty(data.include)
      ? undefined
      : data.include

    // TODO: Validation should be done with Zod
    if (isEmpty(whereInput)) {
      return res.status(422).json({
        message: "Missing where data",
      })
    }

    if (isEmpty(updateInput)) {
      return res.status(422).json({
        message: "Missing update data",
      })
    }

    if (!isEmpty(selectInput) && !isEmpty(includeInput)) {
      return res.status(422).json({
        message: "Please either use `include` or `select`, but not both at the same time.",
      })
    }

    const updateArgs: Prisma.<%= pascalCaseSingularModelName%>UpdateArgs = {
      select: selectInput,
      where: whereInput,
      data: updateInput,
      include: includeInput,
    }

    const <%= camelCaseSingularModelName%>ToUpdate = await _get<%= pascalCaseSingularModelName%>({
      where: whereInput,
      select: {
        accountId: true,
      },
    })

    if (isEmpty(<%= camelCaseSingularModelName%>ToUpdate)) {
      return res.status(404).json({
        message: "<%= camelCaseSingularModelName%> not found.",
      })
    }

    const <%= camelCaseSingularModelName%> = await _update<%= pascalCaseSingularModelName%>({
      where: updateArgs.where,
      data: updateArgs.data,
      select: updateArgs.select,
      include: updateArgs.include
    })
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> updated.',
      data: <%= camelCaseSingularModelName%>
    })
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/update", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc().use(cors).use(authenticationMiddleware).post(post);
import { subject } from "@casl/ability"
import { Prisma } from "@prisma/client"
import isEmpty from "lodash/isEmpty"
import { NextApiResponse } from "next"
import nc from "next-connect"

import { authenticationMiddleware } from "@api/_middleware/_authentication"
import cors from "@api/_middleware/_cors"

import { AuthenticatedApiRequest } from "@lib/types"

import {
  Define<%= pascalCaseSingularModelName%>Abilities,
  _delete<%= pascalCaseSingularModelName%>,
  _get<%= pascalCaseSingularModelName%>,
} from './_operations'

const post = async (req: AuthenticatedApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: "Missing request data",
    })
  }
  
  const whereInput: Prisma.<%= pascalCaseSingularModelName%>DeleteArgs["where"] = isEmpty(data.where)
    ? undefined
    : data.where

  const selectInput: Prisma.<%= pascalCaseSingularModelName%>DeleteArgs["select"] = isEmpty(data.select)
    ? undefined
    : data.select

  if (isEmpty(whereInput)) {
    return res.status(422).json({
      message: "Missing where data",
    })
  }

  const deleteArgs = {
    select: selectInput,
    where: whereInput
  }

  try {
    const <%= camelCaseSingularModelName%>ToDelete = await _get<%= pascalCaseSingularModelName%>({
      where: whereInput,
      select: {
        accountId: true,
      },
    })

    if (isEmpty(<%= camelCaseSingularModelName%>ToDelete)) {
      return res.status(404).json({
        message: "<%= pascalCaseSingularModelName%> not found.",
      })
    }

    const accountIdToDeleteObjectFor = <%= camelCaseSingularModelName%>ToDelete.accountId

    if (req.accountId !== accountIdToDeleteObjectFor) {
      return res.status(401).json({
        message: "Unauthorized to delete this <%= camelCaseSingularModelName%>,",
      })
    }

    const abilities = Define<%= pascalCaseSingularModelName%>Abilities({ accountId: req.accountId })

    if (!abilities.can("delete", subject("<%= pascalCaseSingularModelName%>", { accountId: req.accountId }))) {
      return res.status(401).json({
        message: "Unauthorized to delete this <%= camelCaseSingularModelName%>.",
      })
    }

    const <%= camelCaseSingularModelName%> = await _delete<%= pascalCaseSingularModelName%>(deleteArgs)

    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> deleted.',
      data: <%= camelCaseSingularModelName%>
    })
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/delete", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc().use(cors).use(authenticationMiddleware).post(post);

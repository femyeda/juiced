import { subject } from "@casl/ability"
import isEmpty from "lodash/isEmpty"
import { NextApiResponse } from "next"
import nc from "next-connect"

import { Prisma } from "@db/index"

import { authenticationMiddleware } from "@api/_middleware/_authentication"
import cors from "@api/_middleware/_cors"

import { AuthenticatedApiRequest } from "@lib/types"

import { Define<%= pascalCaseSingularModelName%>Abilities, _get<%= pascalCaseSingularModelName%>, _upsert<%= pascalCaseSingularModelName%> } from "./_operations"

const post = async (req: AuthenticatedApiRequest, res: NextApiResponse) => {
  const { data } = req.body

  if (!data) {
    return res.status(400).json({
      message: "Missing request data.",
    })
  }

  const whereInput: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs["where"] = data.where == null ? undefined : data.where

  const createInput: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs["create"] = isEmpty(data.create)
    ? undefined
    : data.create

  const updateInput: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs["update"] = isEmpty(data.update)
    ? undefined
    : data.update

  const selectInput: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs["select"] = isEmpty(data.select)
    ? undefined
    : data.select

  const includeInput: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs["include"] = isEmpty(data.include)
    ? undefined
    : data.include

  const upsertArgs: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs = {
    select: selectInput,
    where: whereInput,
    create: createInput,
    update: updateInput,
    include: includeInput,
  }

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

  if (isEmpty(createInput)) {
    return res.status(422).json({
      message: "Missing create data",
    })
  }

  if (!isEmpty(selectInput) && !isEmpty(includeInput)) {
    return res.status(422).json({
      message: "Please either use `include` or `select`, but not both at the same time.",
    })
  }

  try {
    const <%= camelCaseSingularModelName%>ToUpdate = await _get<%= pascalCaseSingularModelName%>({
      where: whereInput,
      select: {
        accountId: true,
      },
    })

    if (!isEmpty(<%= camelCaseSingularModelName%>ToUpdate)) {
      const accountIdToUpdateObjectFor = <%= camelCaseSingularModelName%>ToUpdate.accountId

      if (req.accountId !== accountIdToUpdateObjectFor) {
        return res.status(401).json({
          message: "Unauthorized to update this <%= camelCaseSingularModelName%>,",
        })
      }
    }

    const accountIdToCreateObjectFor = createInput?.accountId ?? createInput?.account?.connect?.id

    if (!accountIdToCreateObjectFor) {
      return res.status(422).json({
        message: "Missing relation for <%= camelCaseSingularModelName%>.",
      })
    }

    if (req.accountId !== accountIdToCreateObjectFor) {
      return res.status(401).json({
        message: "Unauthorized to create this <%= camelCaseSingularModelName%>.",
      })
    }

    const abilities = Define<%= pascalCaseSingularModelName%>Abilities({ accountId: req.accountId })

    if (!abilities.can("update", subject("<%= pascalCaseSingularModelName%>", { accountId: req.accountId }))) {
      return res.status(401).json({
        message: "Unauthorized to update this <%= camelCaseSingularModelName%>.",
      })
    }


    const <%= camelCaseSingularModelName%> = await _upsert<%= pascalCaseSingularModelName%>(upsertArgs)
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> upserted.',
      data: <%= camelCaseSingularModelName%>
    })
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/upsert", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc().use(cors).use(authenticationMiddleware).post(post);
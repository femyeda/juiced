import { subject } from "@casl/ability"
import isEmpty from "lodash/isEmpty"
import { NextApiResponse } from "next"
import nc from "next-connect"

import { Prisma } from "@db/index"

import { authenticationMiddleware } from "@api/_middleware/_authentication"
import cors from "@api/_middleware/_cors"

import { AuthenticatedApiRequest } from "@lib/types"

import { Define<%= pascalCaseSingularModelName%>Abilities, _create<%= pascalCaseSingularModelName%> } from './_operations'

const post = async (req: AuthenticatedApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(422).json({
      message: "Missing request data.",
    })
  }

 

  try {
    const abilities = Define<%= pascalCaseSingularModelName%>Abilities({accountId: id: req.accountId})

    if (!abilities.can("create", subject("<%= pascalCaseSingularModelName%>", { id: req.accountId },))) {
      return res.status(401).json({
        message: "Unauthorized to update this <%= camelCaseSingularModelName%>.",
      })
    }

    const createInput: Prisma.<%= pascalCaseSingularModelName%>CreateArgs["data"] = isEmpty(data.data)
      ? undefined
      : data.data

    const selectInput: Prisma.<%= pascalCaseSingularModelName%>CreateArgs["select"] = isEmpty(data.select)
      ? undefined
      : data.select

    const includeInput: Prisma.<%= pascalCaseSingularModelName%>CreateArgs["include"] = isEmpty(data.include)
      ? undefined
      : data.include

    const createArgs: Prisma.<%= pascalCaseSingularModelName%>CreateArgs = {
      select: selectInput,
      include: includeInput,
      data: createInput
    }
    
    if (isEmpty(createInput)) {
      return res.status(422).json({
        message: "Missing create data",
      })
    }
  
    if (!isEmpty(selectInput) && !isEmpty(includeInput)) {
      return res.status(422).json({
        message:
          "Please either use `include` or `select`, but not both at the same time.",
      })
    }

    const <%= camelCaseSingularModelName%> = await _create<%= pascalCaseSingularModelName%>(createArgs)
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> created.',
      data: <%= camelCaseSingularModelName%>
    })
  } catch (error) {
    console.error("[api] <%= camelCaseSingularModelName%>/create", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc().use(cors).use(authenticationMiddleware).post(post);

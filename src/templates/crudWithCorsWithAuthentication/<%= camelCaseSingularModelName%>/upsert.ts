import {_upsert<%= pascalCaseSingularModelName%>} from './_operations'
import { NextApiRequest, NextApiResponse } from "next"
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'
import cors from "@api/_middleware/_cors";
import { authenticationMiddleware } from "@api/_middleware/_authentication";

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing upsert data'
    })
  }

  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = data.where == null ? undefined : data.where
  const createInput = isEmpty(data.create) ? undefined : data.create
  const updateInput = isEmpty(data.update) ? undefined : data.update
  const includeInput = isEmpty(data.include) ? undefined : data.include

  const upsertArgs = {
    select: selectInput,
    where: whereInput,
    create: createInput,
    update: updateInput,
    include: includeInput,
  }

  try {
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
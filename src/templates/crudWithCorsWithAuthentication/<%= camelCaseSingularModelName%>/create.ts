import {_create<%= pascalCaseSingularModelName%>, _exists<%= pascalCaseSingularModelName%>} from './_operations'
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
      message: 'Missing create data'
    })
  }

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const createInput = isEmpty(data.data) ? undefined : data.data
  const includeInput = isEmpty(data.include) ? undefined : data.include
  
  const createArgs = {
    select: selectInput,
    include: includeInput,
    data: createInput
  }

  try {
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

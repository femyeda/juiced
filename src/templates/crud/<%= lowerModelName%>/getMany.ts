import { NextApiRequest, NextApiResponse } from 'next'
import { FindMany<%= upperModelName%>Args } from '@prisma/client'
import {_getMany<%= upperModelName%>} from './_operations'
import isEmpty from 'lodash.isempty'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include


  const findManyArgs: FindMany<%= upperModelName%>Args = {
    select: selectInput,
    where: whereInput,
    include: includeInput
  }

  try {
    const <%= lowerModelName%>s = await _getMany<%= upperModelName%>(findManyArgs)

    return res.status(200).json({data: <%= lowerModelName%>s})
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

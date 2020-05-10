import { NextApiRequest, NextApiResponse } from 'next'
import { FindOne<%= upperModelName%>Args } from '@prisma/client'
import { _get<%= upperModelName%> } from './_operations'
import isEmpty from 'lodash.isempty'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include

  const findOneArgs: FindOne<%= upperModelName%>Args = {
    select: selectInput,
    where: whereInput,
    include: includeInput
  }

  try {
    const <%= lowerModelName%> = await _get<%= upperModelName%>(findOneArgs)

    return res.status(200).json({ data: <%= lowerModelName%> })
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}

import {NextApiRequest, NextApiResponse} from 'next'
import {<%= upperModelName%>DeleteArgs} from '@prisma/client'
import {_delete<%= upperModelName%>} from './_operations'
import isEmpty from 'lodash.isempty'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing delete data'
    })
  }
  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where

  const deleteArgs: <%= upperModelName%>DeleteArgs = {
    select: selectInput,
    where: whereInput
  }
  try {
    const <%= lowerModelName%> = await _delete<%= upperModelName%>(deleteArgs)

    return res.status(200).json({
      message: '<%= upperModelName%> deleted.',
      data: <%= lowerModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

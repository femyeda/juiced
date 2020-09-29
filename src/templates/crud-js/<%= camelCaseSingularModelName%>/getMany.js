import {_getMany<%= pascalCaseSingularModelName%>} from './_operations'
import isEmpty from 'lodash/isEmpty'

export default async (req, res) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include
  const orderByInput = isEmpty(data.orderBy) ? undefined : data.orderBy
  const cursorInput = isEmpty(data.cursor) ? undefined : data.cursor
  const takeInput = isEmpty(data.take) ? undefined : data.take
  const skipInput = isEmpty(data.skip) ? undefined : data.skip
  const distinctInput = isEmpty(data.distinct) ? undefined : data.distinct


  const findManyArgs = {
    select: selectInput,
    where: whereInput,
    include: includeInput,
    orderBy: orderByInput,
    cursor: cursorInput,
    take: takeInput,
    skip: skipInput,
    distinct: distinctInput,
  }

  try {
    const <%= camelCaseSingularModelName%>s = await _getMany<%= pascalCaseSingularModelName%>(findManyArgs)

    return res.status(200).json({data: <%= camelCaseSingularModelName%>s})
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

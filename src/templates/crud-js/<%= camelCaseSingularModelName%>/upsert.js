import {_upsert<%= pascalCaseSingularModelName%>} from './_operations'
import isEmpty from 'lodash/isEmpty'

export default async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing upsert data'
    })
  }

  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
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
      data: <%= camelCaseSingularModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

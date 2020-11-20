import {_update<%= pascalCaseSingularModelName%>} from './_operations'
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'
import cors from '@Middleware/_cors'

const post = async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing update data'
    })
  }

  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const updateInput = isEmpty(data.data) ? undefined : data.data
  const includeInput = isEmpty(data.include) ? undefined : data.include
  
  const updateArgs = {
    select: selectInput,
    where: whereInput,
    data: updateInput,
    include: includeInput,
  }

  try {
    const <%= camelCaseSingularModelName%> = await _update<%= pascalCaseSingularModelName%>({
      where: updateArgs.where,
      data: updateArgs.data,
      select: updateArgs.select,
      include: updateArgs.include
    })
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> updated.',
      data: <%= camelCaseSingularModelName%>
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

export default nc()
  .use(cors)
  .post(post)

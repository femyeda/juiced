import {_delete<%= pascalCaseSingularModelName%>} from './_operations'
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'
import cors from '@Middleware/_cors'

const post = async (req, res) => {
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

  const deleteArgs = {
    select: selectInput,
    where: whereInput
  }
  try {
    const <%= camelCaseSingularModelName%> = await _delete<%= pascalCaseSingularModelName%>(deleteArgs)

    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> deleted.',
      data: <%= camelCaseSingularModelName%>
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

export default nc()
  .use(cors)
  .post(post)

import {NextApiRequest, NextApiResponse} from 'next'
import {<%= pascalCaseSingularModelName%>CreateInput} from '@prisma/client'
import {_update<%= pascalCaseSingularModelName%>} from './_operations'

export default async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing create data'
    })
  }

  
  const updateInput = data

  try {
    const <%= camelCaseSingularModelName%> = await _update<%= pascalCaseSingularModelName%>({
      select: {
        id: true,
      },
      data: updateInput
    })
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> updated.',
      data: <%= camelCaseSingularModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

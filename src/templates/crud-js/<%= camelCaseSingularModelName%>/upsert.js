import {NextApiRequest, NextApiResponse} from 'next'
import {<%= pascalCaseSingularModelName%>CreateInput} from '@prisma/client'
import {_upsert<%= pascalCaseSingularModelName%>} from './_operations'

export default async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing create data'
    })
  }

  
  const upsertInput = data

  try {
    const <%= camelCaseSingularModelName%> = await _upsert<%= pascalCaseSingularModelName%>({
      select: {
        id: true,
      },
      data: upsertInput
    })
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> upserted.',
      data: <%= camelCaseSingularModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

import {NextApiRequest, NextApiResponse} from 'next'
import {<%= pascalCaseSingularModelName%>CreateInput} from '@prisma/client'
import {_create<%= pascalCaseSingularModelName%>, _exists<%= pascalCaseSingularModelName%>} from './_operations'

export default async (req, res) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing create data'
    })
  }

  
  const createInput = data

  try {
    const <%= camelCaseSingularModelName%> = await _create<%= pascalCaseSingularModelName%>({
      select: {
        id: true,
      },
      data: createInput
    })
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> created.',
      data: <%= camelCaseSingularModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

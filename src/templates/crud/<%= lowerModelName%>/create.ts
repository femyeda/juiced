import {NextApiRequest, NextApiResponse} from 'next'
import {<%= upperModelName%>CreateInput} from '@prisma/client'
import {_create<%= upperModelName%>, _exists<%= upperModelName%>} from './_operations'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing create data'
    })
  }

  
  const createInput: <%= upperModelName%>CreateInput = data

  try {
    const <%= lowerModelName%> = await _create<%= upperModelName%>({
      select: {
        id: true,
      },
      data: createInput
    })
    
    return res.status(200).json({
      message: '<%= upperModelName%> created.',
      data: <%= lowerModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

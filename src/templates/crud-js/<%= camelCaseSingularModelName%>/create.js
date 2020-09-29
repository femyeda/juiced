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

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const createInput = isEmpty(data.update) ? undefined : data.data
  const includeInput = isEmpty(data.include) ? undefined : data.include
  
  const createArgs = {
    select: selectInput,
    include: includeInput,
    data: createInput
  }

  try {
    const <%= camelCaseSingularModelName%> = await _create<%= pascalCaseSingularModelName%>(createArgs)
    
    return res.status(200).json({
      message: '<%= pascalCaseSingularModelName%> created.',
      data: <%= camelCaseSingularModelName%>.id
    })
  } catch (err) {
    return res.status(500).json({statusCode: 500, message: err.message})
  }
}

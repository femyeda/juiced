import superagent from 'superagent'

const URLS = {
  'get': '/api/<%= camelCaseSingularModelName%>/get',
  'getMany': '/api/<%= camelCaseSingularModelName%>/getMany',
  'create': '/api/<%= camelCaseSingularModelName%>/create',
  'delete': '/api/<%= camelCaseSingularModelName%>/delete',
  'update': '/api/<%= camelCaseSingularModelName%>/update',
  'upsert': '/api/<%= camelCaseSingularModelName%>/upsert',
}

const get<%= pascalCaseSingularModelName %> = async ({
  where = undefined,
  select = undefined,
  include = undefined
}) => {
  try {
    const response = await superagent
      .post(URLS.get)
      .send({
        where,
        select,
        include,
      })
    
    
  } catch (reason) {

  }
}

const get<%= pascalCasePluralModelName %> = async ({
  where = undefined,
  select = undefined,
  include = undefined,
  orderBy = undefined,
  cursor = undefined,
  take = undefined,
  skip = undefined,
  distinct = undefined
}) => {
  const response = await superagent
    .post(URLS.get)
    .send({
      where,
      select,
      include,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    })
}
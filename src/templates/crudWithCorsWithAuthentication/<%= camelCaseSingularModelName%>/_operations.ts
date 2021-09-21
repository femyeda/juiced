import {
  PrismaClient,
  <%= pascalCaseSingularModelName%>WhereUniqueInput,
  <%= pascalCaseSingularModelName%>CreateArgs,
  <%= pascalCaseSingularModelName%>FindUniqueArgs,
  <%= pascalCaseSingularModelName%>FindManyArgs,
  <%= pascalCaseSingularModelName%>UpsertArgs,
  <%= pascalCaseSingularModelName%>UpdateArgs,
  <%= pascalCaseSingularModelName%>UpdateManyArgs,
  <%= pascalCaseSingularModelName%>DeleteArgs,
  <%= pascalCaseSingularModelName%>DeleteManyArgs,
} from '@prisma/client'


export async function _exists<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>WhereUniqueInput) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.<%= camelCaseSingularModelName%>.findUnique({
      select: {
        id: true
      },
      where: args
    })

    if (result) {
      return true
    }

    return false
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _create<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>CreateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _get<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>FindUniqueArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.findUnique(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getMany<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>FindManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _upsert<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>UpsertArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.upsert(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _update<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>UpdateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateMany<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>UpdateManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _delete<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>DeleteArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteMany<%= pascalCaseSingularModelName%>(args: <%= pascalCaseSingularModelName%>DeleteManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

import {
  PrismaClient,
  <%= upperModelName%>CreateArgs,
  <%= upperModelName%>UpdateArgs,
  <%= upperModelName%>UpdateManyArgs,
  FindOne<%= upperModelName%>Args,
  FindMany<%= upperModelName%>Args,
  <%= upperModelName%>DeleteArgs,
  <%= upperModelName%>DeleteManyArgs,
  <%= upperModelName%>WhereUniqueInput
} from '@prisma/client'


export async function _exists<%= upperModelName%>(args: <%= upperModelName%>WhereUniqueInput) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.<%= lowerModelName%>.findOne({
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
    await prisma.disconnect()
  }
}

export async function _create<%= upperModelName%>(args: <%= upperModelName%>CreateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

export async function _get<%= upperModelName%>(args: FindOne<%= upperModelName%>Args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.findOne(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

export async function _getMany<%= upperModelName%>(args: FindMany<%= upperModelName%>Args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

export async function _update<%= upperModelName%>(args: <%= upperModelName%>UpdateArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

export async function _updateMany<%= upperModelName%>(args: <%= upperModelName%>UpdateManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

export async function _delete<%= upperModelName%>(args: <%= upperModelName%>DeleteArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

export async function _deleteMany<%= upperModelName%>(args: <%= upperModelName%>DeleteManyArgs) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= lowerModelName%>.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.disconnect()
  }
}

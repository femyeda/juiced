import {
  PrismaClient,
} from '@prisma/client'


export async function _exists<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.<%= camelCaseSingularModelName%>.findOne({
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

export async function _create<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.create(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _get<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.findOne(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _getMany<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.findMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _upsert<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.upsert(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _update<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.update(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _updateMany<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.updateMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _delete<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.delete(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

export async function _deleteMany<%= pascalCaseSingularModelName%>(args) {
  const prisma = new PrismaClient()

  try {
    return await prisma.<%= camelCaseSingularModelName%>.deleteMany(args)
  } catch (err) {
    throw err
  } finally {
    await prisma.$disconnect()
  }
}

import prisma, { Prisma } from "@db"
export async function _exists<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>WhereUniqueInput
): Promise<Boolean> {
  const result = await prisma.<%= camelCaseSingularModelName%>.findUnique({
    select: {
      id: true,
    },
    where: args,
  })

  if (result) {
    return true
  }

  return false
}

export async function _create<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>CreateArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.create>> {
  return await prisma.<%= camelCaseSingularModelName%>.create(args)
}

export async function _get<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>FindUniqueArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.findUnique>> {
  return await prisma.<%= camelCaseSingularModelName%>.findUnique(args)
}

export async function _getMany<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>FindManyArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.findMany>> {
  return await prisma.<%= camelCaseSingularModelName%>.findMany(args)
}

export async function _upsert<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>UpsertArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.upsert>> {
  return await prisma.<%= camelCaseSingularModelName%>.upsert(args)
}

export async function _update<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>UpdateArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.update>> {
  return await prisma.<%= camelCaseSingularModelName%>.update(args)
}

export async function _updateMany<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>UpdateManyArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.updateMany>> {
  return await prisma.<%= camelCaseSingularModelName%>.updateMany(args)
}

export async function _delete<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>DeleteArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.delete>> {
  return await prisma.<%= camelCaseSingularModelName%>.delete(args)
}

export async function _deleteMany<%= pascalCaseSingularModelName%>(
  args: Prisma.<%= pascalCaseSingularModelName%>DeleteManyArgs
): Promise<ReturnType<typeof prisma.<%= camelCaseSingularModelName%>.deleteMany>> {
  return await prisma.<%= camelCaseSingularModelName%>.deleteMany(args)
}

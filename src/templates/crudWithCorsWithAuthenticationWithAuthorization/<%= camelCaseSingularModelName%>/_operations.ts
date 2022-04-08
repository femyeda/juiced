import { AbilityBuilder, AbilityClass } from "@casl/ability"
import { PrismaAbility } from "@casl/prisma"

import prisma, { Prisma } from "@db"

import { AppAbility } from "@lib/types"

/**
 * What's being done here is can "actor" act on "object"
  type DefineScheduleAbilitiesArgs = {
    actorId: string
    object: ObjectType
  }

  export function DefineScheduleAbilities({ accountId, object }: DefineScheduleAbilitiesArgs) {...}
 */

type Define<%= pascalCaseSingularModelName%>AbilitiesArgs = {
  accountId: string
}

export function Define<%= pascalCaseSingularModelName%>Abilities({accountId}: Define<%= pascalCaseSingularModelName%>AbilitiesArgs) {
  const AppAbility = PrismaAbility as AbilityClass<AppAbility>
  const { can, cannot, build } = new AbilityBuilder(AppAbility)

  throw Error("Unimplemented")
  /**
  can("read", "<%= pascalCaseSingularModelName%>")
  can("get", "<%= pascalCaseSingularModelName%>")
  can("update", "<%= pascalCaseSingularModelName%>", { accountId: accountId })
  can("delete", "<%= pascalCaseSingularModelName%>", { accountId: accountId })

  const ability = build()
  return ability
   */
}

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

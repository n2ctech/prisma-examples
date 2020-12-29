import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: any
}

export function createContext(request: Context) {
  return {
    ...request,
    prisma,
  }
}

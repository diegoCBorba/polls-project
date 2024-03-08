import { PrismaClient } from '@prisma/client'

// conexão com o banco
export const prisma = new PrismaClient({
    log: ['query']
})

// Essa log: ['query'] passa uma informação mais detalhada das requisições ao banco
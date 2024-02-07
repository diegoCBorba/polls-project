import fastify from "fastify"
import { PrismaClient } from '@prisma/client'
import { z } from 'zod';

const app = fastify()

// conexão com o banco
const prisma = new PrismaClient()

// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS

app.post('/polls', async (resquest, reply) => {
    const createPollBody = z.object({
        title: z.string()
    })

    const { title } = createPollBody.parse(resquest.body)

    const poll = await prisma.poll.create({
        data: {
            title,
        }
    })

    // Código de status de respostas HTTP utilizando o reply, 201 - criação bem sucedida
    return reply.status(201).send({ pollId: poll.id })
})

app.listen({ port: 3333}).then(() => {
    console.log("HTTP server running")
})

// Driver nativo
// ORMs - bibliotecas que tem ferramentas para trabalhar com Databases

// ORM utilizado - Prisma
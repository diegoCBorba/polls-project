import fastify from "fastify"
import cookie from "@fastify/cookie"
import { createPoll } from "./routes/create-polls"
import { getPoll } from "./routes/get-poll"
import { voteOnPoll } from "./routes/vote-on-poll"

const app = fastify()

// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS

app.register(cookie, {
    secret: "polls-app",
    hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333}).then(() => {
    console.log("HTTP server running")
})

// Driver nativo
// ORMs - bibliotecas que tem ferramentas para trabalhar com Databases

// ORM utilizado - Prisma
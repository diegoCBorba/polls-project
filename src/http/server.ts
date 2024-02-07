import fastify from "fastify";

const app = fastify()

// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS

app.post('/polls', (resquest) => {
    console.log(resquest.body)
    return 'Hello NLW'
})

app.listen({ port: 3333}).then(() => {
    console.log("HTTP server running")
})

// Driver nativo
// ORMs - bibliotecas que tem ferramentas para trabalhar com Databases

// ORM utilizado - Prisma
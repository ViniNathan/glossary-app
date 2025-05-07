import fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'

dotenv.config()

const app = fastify({
  logger: true
})

// Registra o plugin CORS
app.register(cors, {
  origin: true // Permite todas as origens em desenvolvimento
})

// Rota de teste
app.get('/', async (request, reply) => {
  return { message: 'API funcionando!' }
})

// Inicia o servidor
const start = async () => {
  try {
    await app.listen({ port: 5000, host: '0.0.0.0' })
    console.log('Servidor rodando na porta 5000')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start() 
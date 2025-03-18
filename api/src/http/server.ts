import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import 'dotenv/config'
import cors from '@fastify/cors'
import { PokemonRoutes } from '../Routes/Pokemon'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(cors, {
  origin: true,
})

app.get('/ping', async () => {
  return { ping: 'pong' }
})

app.register(PokemonRoutes, { prefix: 'api/pokemons' })

app
  .listen({
    port: !process.env.PORT ? 3333 : parseInt(process.env.PORT),
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 Server is running on port ${process.env.PORT || 3333}`)
  })

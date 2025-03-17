import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { PokemonRoutes } from '../Routes/Pokemon'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.get('/ping', async () => {
  return { ping: 'pong' }
})

app.register(PokemonRoutes, { prefix: 'api/pokemons' })

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server is running on port 3333')
  })

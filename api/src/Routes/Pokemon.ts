import axios from 'axios'
import { FastifyInstance } from 'fastify'
import z from 'zod'
import { createArrayFromAbilities } from '../http/Functions/Pokemon'
export async function PokemonRoutes(app: FastifyInstance) {
  app.get('/:pokemon', async request => {
    const paramsSchema = z.object({
      pokemon: z.string(),
    })
    const { pokemon } = paramsSchema.parse(request.params)

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )
    if (response.status === 200) {
      const { abilities } = response.data
      const dataAbilities = await createArrayFromAbilities(abilities)
      return dataAbilities.sort()
    }
  })
}

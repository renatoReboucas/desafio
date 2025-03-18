import axios from 'axios'
import { FastifyInstance } from 'fastify'
import z from 'zod'
import { createArrayFromAbilities } from '../Functions/Pokemon'
import 'dotenv/config'

export async function PokemonRoutes(app: FastifyInstance) {
  app.get('/:pokemon', async request => {
    const paramsSchema = z.object({
      pokemon: z.string(),
    })
    const { pokemon } = paramsSchema.parse(request.params)

    try {
      const response = await axios.get(
        `${process.env.API_URL}${pokemon}`
      )
      if (response.status === 200) {
        const { abilities } = response.data
        const dataAbilities = await createArrayFromAbilities(abilities)
        return dataAbilities.sort()
      }
    } catch (error) {
      return { error: 'Pokemon not found' }
    }
  })
}

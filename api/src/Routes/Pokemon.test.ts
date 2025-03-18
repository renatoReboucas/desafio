import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PokemonRoutes } from './Pokemon'
import axios from 'axios'
import { FastifyInstance } from 'fastify'
import { Mocked } from 'vitest'

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe('Pokemon Routes', () => {
  let app: FastifyInstance
  let mockRequest: any
  let mockReply: any

  beforeEach(() => {
    app = {
      get: vi.fn(),
    } as unknown as FastifyInstance

    mockRequest = {
      params: {
        pokemon: 'pikachu',
      },
    }

    mockReply = {
      send: vi.fn(),
    }

    process.env.API_URL = 'https://pokeapi.co/api/v2/pokemon/'
  })

  it('deve retornar as habilidades do Pokémon ordenadas', async () => {
    const mockResponse = {
      status: 200,
      data: {
        abilities: [
          { ability: { name: 'static' } },
          { ability: { name: 'lightning-rod' } },
        ],
      },
    }

    mockedAxios.get.mockResolvedValueOnce(mockResponse)

    await PokemonRoutes(app)
    const routeHandler = (app.get as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1]
    const result = await routeHandler(mockRequest, mockReply)

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    )
    expect(result).toEqual(['lightning-rod', 'static'])
  })
  it('deve retornar erro quando o Pokémon não for encontrado', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Not found'))

    await PokemonRoutes(app)
    const routeHandler = (app.get as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1]
    const result = await routeHandler(mockRequest, mockReply)

    expect(result).toEqual({ error: 'Pokemon not found' })
  })
}) 
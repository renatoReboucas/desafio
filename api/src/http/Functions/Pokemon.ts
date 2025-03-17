import type { Pokemon } from '../../Types/Pokemon'

export async function createArrayFromAbilities(abilities: Pokemon) {
  const data = []
  for (const ability of abilities) {
    data.push(ability.ability.name)
  }
  return data
}

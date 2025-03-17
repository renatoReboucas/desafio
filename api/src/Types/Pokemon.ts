export type Pokemon = PokemonAbility[]

export interface PokemonAbility {
  ability: Ability
  is_hidden: boolean
  slot: number
}

export interface Ability {
  name: string
  url: string
}

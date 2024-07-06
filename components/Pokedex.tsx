import { IPokedexItem } from '@/interfaces/pokemon'
import Link from 'next/link'
import React from 'react'

interface Props {
  pokemonList: IPokedexItem[]
}

function Pokedex({ pokemonList }: Props) {
  return (
    <div className='w-full h-full'>
      <h1 className='mb-2'>CONTENTS</h1>
      <div className='overflow-y-auto h-full pb-8'>
        {
          pokemonList.map(pokemon => {
            return <Link key={pokemon.number} href={`/pokemon/${pokemon.number}`}>
              <p>{pokemon.number.toString().padStart(3, "0")}</p>
              <h2 className='uppercase ml-8'>{pokemon.name}</h2>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Pokedex
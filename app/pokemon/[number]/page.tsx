import { IPokemon } from '@/interfaces/pokemon';
import Image from 'next/image';
import React from 'react'

async function Page({ params }: { params: { number: number } }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.number}`);
  const pokemonData: IPokemon = await res.json();
  const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.number}/`);
  const pokemonSpecies = await resSpecies.json();
  const pokemonDesc = pokemonSpecies.flavor_text_entries.find((item: any) => item.version.name === "red")?.flavor_text;

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex p-4'>
        <div className='flex flex-col items-center'>
          <Image src={pokemonData.sprites.front_default!} alt={pokemonData.name} width={160} height={160} />
          <p>N. {pokemonData.id.toString().padStart(3, "0")}</p>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <h2 className='uppercase'>
            {pokemonData.name}
          </h2>
          <div>
            <span>HT</span>&nbsp;<span>{pokemonData.height / 10} m</span>
          </div>
          <div>
            <span>WT</span>&nbsp;<span>{pokemonData.weight / 10} kg</span>
          </div>
        </div>
      </div>
      <hr className='w-full border-black border-t-4' />
      <p className='p-4 text-lg'>
        {pokemonDesc}
      </p>
    </div>
  )
}

export default Page
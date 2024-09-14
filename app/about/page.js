"use client";

import Image from "next/image";
import {  useState } from "react";

export default function About() {
  
 const [state, setstate] = useState(
    {name: '', 
    spriteUrl:'',
    error:true,
    types:[],
    searchedPokemon:[]});

  //const [searchedPokemon, setSearchedPokemon] = ([]);


  const getPokemanData = (name) => {
  if ([state.searchedPokemon].indexOf(name)==-1){
      console.log("Not searched")
    }
    fetch('https://pokeapi.co/api/v2/pokemon/'+name)
   .then(response => response.json())
   .then(response=>setPokemanData(response))
   .catch((error) => {
    setstate(
      {...state,error:error,searchedPokemon:[...state.searchedPokemon,name]});
      console.log(state.searchedPokemon)
  })
}
  
  const setPokemanData = (response) =>{
    setstate(
      {name: response.name,
       spriteUrl:response.sprites.front_default,
      types: response.types[0].type.name,
       error:false//,       searchedPokemon:[...searchedPokemon,response.name]
      })
    
  }

//  getPokemanData('pikachu')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
              <button type="button" 
      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={()=>{
          getPokemanData('name')}
          
      }
      >
    Get Data
   </button>

        </main>
        </div>
  )
}
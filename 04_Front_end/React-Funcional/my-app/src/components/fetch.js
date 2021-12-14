import React,{useEffect,useState} from 'react'

function Fetch() {
   const [advice,setAdvice] =  useState("")

    useEffect(() => {
        const url = 'https://api.adviceslip.com/advice';
        //const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/ditto'
        //execute function
        getAdvice( urlPokemon );

    }, [])
   
    const getAdvice = async (url) => {
        
        try {
            const response = await fetch( url );
            const json = await response.json();
            //log
            console.log( json )
            //set
            setAdvice( json.slip.advice );
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
         <div>
            <p>{advice}</p>
        </div>
    )
}

export default Fetch

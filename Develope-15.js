const pokemonOne = {
    name: "피카츄",
    pokemonOne: function(){
        console.log(this);
    }
}

pokemonOne.pokemonOne();

const pokemonTwo = {
    name: "라이츄",
    pokemonTwo:()=>{
        console.log(this);
    }
}

pokemonTwo.pokemonTwo();
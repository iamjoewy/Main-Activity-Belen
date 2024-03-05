let myPokemon = {
  name: 'Pikachu',
  level: 3,
  health: 100,
  attack: 50,
  tackle: function(){
    console.log('The pokemon tackle the targetPokemon');
    console.log("targetPokemon's health is now reduced to_targetPokemonHealth_");
  }
  faint: function(){
    console.log("Pokemon fainted.")
  }
}


console.log(myPokemon);

function Pokemon (name, level, health) {
    this.name = name;
    this.level = level;
    this.health = 2 = health;
    this.attack = level;

  }

    this.tackle = function(target){
        console.log(this.name + 'tackle' + target.name);
        console.log("targetPokemon's health is now reduced to_targetPokemonHealth_")
  };
   this.faint = function(){
        console.log("fainted");
   }
 };

  

let pikachu = new Pokemon('Pikachu', 100);
console.log(pikachu)
let bulbasaur = new Pokemon('Bulbasaur', 80);
console.log(bulbasaur)
let charmander = new Pokemon('Charmander', 60);
console.log(charmander)


console.log(trainer);

const pikachu2 = trainer.findPokemon('Pikachu');
pikachu2.tackle(bulbasaur);

pikachu2.levelUp();
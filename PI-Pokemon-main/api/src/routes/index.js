const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const PokemonFunctions = require("../controllers/PokemonFunctions.js");
const { Pokemon, Type } = require("../db");

router.get("/pokemons", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const pokemon = await PokemonFunctions.getPokemonDetail(name);
      return res.send(pokemon);
    }
    const allPokemons = await PokemonFunctions.getInfoPokemons();
    res.send(allPokemons);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if(id){
    const pokemon=await PokemonFunctions.getPokemonDetailById(id)
    return res.send(pokemon)
    }
    else{
      throw new Error("No se mando id")
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    let createPokemon=await PokemonFunctions.createPokemon(req.body);
    res.send(createPokemon)
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/types",async(req,res)=>{
  try {
    let getAllTypes= await PokemonFunctions.getPokemonTypes();
    res.send(getAllTypes)
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = router;

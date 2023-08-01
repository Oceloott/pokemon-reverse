<!-- pages/index.vue -->

<template>
  <div>
    <div class="container">
      <Header/>
      <div class="pokedex">
        <div class="pokedex-aside">
          <!-- Grab a random pokemon and display it -->
          <Random
            v-if="randomPokemon"
            :randomImage="`/images/${
              ('00' + randomPokemon.id).slice(-3) +
              randomPokemon.name.english +
              '.png'
            }`"
            :randomNum="randomPokemon.num"
            :randomName="randomPokemon.name.english"
            :randomTypes="randomPokemon.type"
            :randomHeight="randomPokemon.height"
            :randomWeight="randomPokemon.weight"
            :randomStats="randomPokemon.base"
            :randomWeaknesses="randomPokemon.weaknesses"
            :randomClass="randomPokemon.type[0].toLowerCase()"
          />
        </div>
        <div class="pokedex-pokemon">
          <!-- Filter section with searchbar and filter button -->
          <div class="pokedex-filter">
            <div class="pokedex-search">
              <img class="pokedex-search-loop" src="/images/search.svg" alt="">
              <input
              class="pokedex-search-bar"
              type="text"
              v-model="searchTerm"
              placeholder="Recherche..."
              />
            </div>
            <div class="pokedex-elements">
              <button v-for="pokemonType in uniqueTypes" :key="pokemonType" class="pokedex-elements-button" :class="'pokedex-elements-button--'+ pokemonType.toLowerCase()" v-bind:active="isTypeActive(pokemonType)" @click="toggleTypeFilter(pokemonType)">{{ pokemonType }}</button>
            </div>
          </div>
          <!-- Displaying pokemon list -->
          <div class="pokedex-list">
            <Card
            v-for="pokemon in filteredPokemonList"
            :key="pokemon.id"
            :pokemonImage="`/images/${
              ('00' + pokemon.id).slice(-3) + pokemon.name.english + '.png'
            }`"
            :pokemonNum="pokemon.num"
            :pokemonName="pokemon.name.english"
            :pokemonClass="pokemon.type[0].toLowerCase()"
            :pokemonTypes="pokemon.type"
            :pokemonLink="pokemon.num"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Random from "@/components/Random.vue";
import Header from "@/components/Header.vue";
export default {
  name: "IndexPage",
  components: {
    Card,
    Random,
    Header,
  },
  data() {
    return {
      searchTerm: "",
      selectedTypes: [],
    };
  },
  computed: {
    // Get pokemon
    pokedex() {
      return this.$store.state.pokedex.pokedex;
    },
    // Grab a random pokemon
    randomPokemon() {
      const randomIndex = Math.floor(Math.random() * this.pokedex.length);
      return this.pokedex[randomIndex];
    },
    // Filter function
    filteredPokemonList() {
      // Filter by search
      let filteredList = this.pokedex.filter((pokemon) =>
        pokemon.name.english
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
      // Filter by types
      if (this.selectedTypes.length > 0) {
        filteredList = filteredList.filter((pokemon) =>
          this.selectedTypes.every((type) => pokemon.type.includes(type))
        );
      }
      return filteredList;
    },
    // Adding active=true atribute to button
    isTypeActive() {
      return (type) => this.selectedTypes.includes(type);
    },
    // Get all unique types from pokedex
    uniqueTypes() {
      const allTypes = this.pokedex.map((pokemon) => pokemon.type).flat();
      return [...new Set(allTypes)];
    },
  },
  methods: {
    // Adding type in selectedTypes when toggling button
    toggleTypeFilter(type) {
      const index = this.selectedTypes.indexOf(type);
      if (index === -1) {
        // If not selected
        this.selectedTypes.push(type);
      } else {
        // If selected
        this.selectedTypes.splice(index, 1);
      }
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchPokedex");
  },
};
</script>

<style lang="scss">

.pokedex {
  display: flex;
  width: 100%;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  &-aside {
    height: fit-content;
    margin-top: 100px;
    @media screen and (min-width: 1200px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
  // Filter searchbar
  &-search{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 26px;
    margin: 20px 0;
    &-loop{
      width: 15px;
      width: 15px;
      margin: 0 16px;
    }
    &-bar{
      width: 100%;
      background-color: transparent;
      height: 48px;
      border: none;
      &:focus{
        outline: none;
      }
    }
  }
  // Filter buttons
  &-elements{
    overflow: auto;
    margin: 8px 10px;
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;
    &-button{
      text-decoration: none;
      padding: 10px 20px;
      font-family: "Rubik", sans-serif;
      font-weight: bold;
      transition: all 0.3s linear 0s;
      background-color: transparent;
      margin: 0 4px;
      &:hover{
        cursor: pointer;
      }
      &[active="true"]{
        cursor: pointer;
      }
    }
  }
  &-pokemon{
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1200px) {
      grid-area: 1 / 2 / 2 / 5;
    }
  }
  &-list {
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: repeat(1, 1fr);
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
// Main container

</style>

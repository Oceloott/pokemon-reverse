<!-- pages/index.vue -->

<template>
  <div>
    <br /><br /><br />
    <div class="container">
      <div class="pokedex">
        <div class="pokedex-aside">
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
        <div class="pokedex-list">
          <Card
            v-for="pokemon in pokedex"
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
</template>

<script>
import Card from "@/components/Card.vue";
import Random from "@/components/Random.vue";
export default {
  name: "IndexPage",
  components: {
    Card,
    Random,
  },
  computed: {
    pokedex() {
      return this.$store.state.pokedex;
    },
    randomPokemon() {
      if (this.pokedex.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * this.pokedex.length);
      return this.pokedex[randomIndex];
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
    @media screen and (min-width: 1200px) {
      grid-area: 1 / 2 / 2 / 5;
    }
  }
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 750px;
  }
  @media screen and (min-width: 992px) {
    max-width: 970px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1170px;
  }
}
</style>

<!-- pages/index.vue -->

<template>
  <div>
    <br><br><br>
    <!-- <div class="container">
      <Card
        v-for="pokemon in pokedex"
        :key="pokemon.id"
        :imageLink="`/images/${
          ('00' + pokemon.id).slice(-3) + pokemon.name.english + '.png'
        }`"
        :id="pokemon.id"
        :name="pokemon.name.english"
        :newClass="pokemon.type[0].toLowerCase()"
        :type1="pokemon.type[0]"
        :type2="pokemon.type[1]"
        :pokemonLink="pokemon.id - 1"
        />
    </div> -->
    <!-- <div v-for="pokemon in pokedex" :key="pokemon.id">
      <h2>{{ pokemon.name.english }}</h2>
      <p>Types: {{ pokemon.type.join(', ') }}</p>
      <p>HP: {{ pokemon.base.HP }}</p>
      <p>Attack: {{ pokemon.base.Attack }}</p>
      <p>Defense: {{ pokemon.base.Defense }}</p>
      <p>Sp. Attack: {{ pokemon.base['Sp. Attack'] }}</p>
      <p>Sp. Defense: {{ pokemon.base['Sp. Defense'] }}</p>
      <p>Speed: {{ pokemon.base.Speed }}</p>
    </div> -->
    {{ randomPokemon }}
    <div class="container">
      <div class="pokedex">
        <div class="pokedex-aside">fds</div>
        <div class="pokedex-list">
          <Card
            v-for="pokemon in pokedex"
            :key="pokemon.id"
            :imageLink="`/images/${
              ('00' + pokemon.id).slice(-3) + pokemon.name.english + '.png'
            }`"
            :id="pokemon.num"
            :name="pokemon.name.english"
            :newClass="pokemon.type[0].toLowerCase()"
            :type1="pokemon.type[0]"
            :type2="pokemon.type[1]"
            :pokemonLink="pokemon.id - 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "IndexPage",
  components: {
    Card,
  },
  computed: {
    pokedex() {
      return this.$store.state.pokedex;
    },
    randomPokemon(){
      if (this.pokedex.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * this.pokedex.length);
      return this.pokedex[randomIndex];    }
  },
  async mounted() {
    await this.$store.dispatch("fetchPokedex");
  },
};
</script>

<style lang="scss">
.pokedex {
  background: red;
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
    background: bisque;
    @media screen and (min-width: 1200px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
  &-list {
    background: rebeccapurple;
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

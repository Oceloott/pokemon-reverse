<!-- pages/index.vue -->

<template>
  <div>
    <Card
        v-for="pokemon in pokedex" :key="pokemon.id"
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
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchPokedex');
  }
};
</script>

<!-- pages/index.vue -->

<template>
  <div>
    <div v-for="pokemon in pokedex" :key="pokemon.id">
      <h2>{{ pokemon.name.english }}</h2>
      <p>Types: {{ pokemon.type.join(', ') }}</p>
      <p>HP: {{ pokemon.base.HP }}</p>
      <p>Attack: {{ pokemon.base.Attack }}</p>
      <p>Defense: {{ pokemon.base.Defense }}</p>
      <p>Sp. Attack: {{ pokemon.base['Sp. Attack'] }}</p>
      <p>Sp. Defense: {{ pokemon.base['Sp. Defense'] }}</p>
      <p>Speed: {{ pokemon.base.Speed }}</p>
    </div>
  </div>
</template>

<script>
export default {
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

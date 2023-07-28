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

<style lang="scss">
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
}
.pokedex {
  display: grid;
  padding-inline-start: 0;
  height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-color: #ab1515 var(--water-secondary);
  scrollbar-width: thin;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;

  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;

  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

  }
  &-group{
    display: flex;
    flex-direction: row;
  }
  &-search{
    background: #fff;
    padding: 0 20px;
    transition: .3s;
    border: 1px solid #ab1515;
    border-radius: 4px;
    display: block;
    font-size: 12px;
    font-weight: 400;
    height: 32px;
    position: absolute;
    right: 12px;
    top: 30%;
    outline:  none;
    &:focus{
      box-shadow: inset 0 0 0px 2px #c42829;
    }
    @media screen and (max-width: 768px) {
      top: 50%;
      right: 30px;
    }
  }
  &-completed {
    display: flex;
    flex-direction: column;
    border-radius: 50px 0 0 0;
    background-color: #c63030;
    margin-top: 25px;
    border-radius: 30px 10px 10px 5px;
  }
  &-lence {
    width: calc(100% - 15px);
    height: 60px;
    background-color: #c42829;
    padding: 15px 0 0 15px;
    top: 0;
    left: 0;
    box-shadow: 0px 6px #ab1515;
    border-radius: 30px 10px 30px 0px;
    margin-bottom: 25px;
    position: relative;
  }
  &-glass {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border: solid 4px white;
    background: radial-gradient(var(--water), var(--water-secondary));
    border-radius: 35px;
  }
  &-reflect {
    width: 15px;
    height: 9px;
    margin: 5px 0 0 11px;
    background: white;
    opacity: 0.6;
    border-radius: 15px 9px;
  }
  &-first {
    width: 18px;
    height: 18px;
    margin-right: 9px;
    border-radius: 20px;
    background: radial-gradient(var(--poison), var(--poison-secondary));
  }
  &-second {
    width: 18px;
    height: 18px;
    margin-right: 9px;
    border-radius: 18px;
    background: radial-gradient(var(--fire), var(--fire-secondary));
  }
  &-third {
    width: 18px;
    height: 18px;
    margin-right: 9px;
    border-radius: 18px;
    background: radial-gradient(var(--grass), var(--grass-secondary));
  }
}
</style>

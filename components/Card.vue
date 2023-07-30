<template>
  <div class="pokedex-card" :class="'bg-' + pokemonClass">
    <NuxtLink class="full" :to="'/pokemon/' + pokemonLink">
    <p class="pokedex-id">#{{ pokemonNum }}</p>
    <p class="pokedex-name">{{ pokemonName }}</p>
    <div class="pokedex-information">
      <div class="pokedex-types">
        <p
        class="pokedex-type"
        :class="'bg-' + type.toLocaleLowerCase() + '--secondary'"
        v-for="(type, index) in pokemonTypes"
        :key="index"
      >
        {{ type }}
      </p>
      </div>
      <div class="pokedex-pokemon">
        <img class="pokedex-image" :src="pokemonImage" :alt="name" />
      </div>
    </div>
  </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    pokemonImage: {
      type: String,
      required: true,
    },
    pokemonLink: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    pokemonNum: {
      type: String,
      required: true,
    },
    pokemonName: {
      type: String,
      required: true,
    },
    pokemonClass: {
      type: String,
      default: "",
    },
    pokemonTypes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pokedex {
  &-information {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  &-pokemon {
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    background-image: url("/images/pokeballl.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &-type {
    padding: 9px 0px;
    width: 90%;
    text-align: center;
    margin: 10px 0 0 0;
    border-radius: 25px;
    color: white;
    font-weight: bold;
  }
  &-types {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-id {
    text-align: right;
    color: white;
    margin: 0;
    width: 100%;
    font-weight: bold;
  }
  &-card {
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 10px 35px;
    margin: 10px;
    width: auto;
    max-height: 150px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
    &:hover .pokedex-image{
      animation: shaking 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);


    }
  }
  &-name {
    margin: 5px 0;
    width: 100%;
    color: white;
    font-weight: bold;
    font-size: 24px;
  }

  &-image {
    height: 90px;
  }
}
</style>

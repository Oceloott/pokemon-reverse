<template>
  <div class="pokedex-card" :class="'pokedex-card--' + newClass">
    <NuxtLink class="full" :to="'/pokemon/' + pokemonLink">
    <p class="pokedex-id">#{{ id }}</p>
    <p class="pokedex-name">{{ name }}</p>
    <div class="pokedex-information">
      <div class="pokedex-types">
        <p class="pokedex-type" :class="type1.toLocaleLowerCase()">
          {{ type1 }}
        </p>
        <p class="pokedex-type" :class="type2.toLocaleLowerCase()" v-if="type2">
          {{ type2 }}
        </p>
      </div>
      <div class="pokedex-pokemon">
        <img class="pokedex-image" :src="imageLink" :alt="name" />
      </div>
    </div>
  </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    imageLink: {
      type: String,
      required: true,
    },
    pokemonLink: {
      type: Number,
      required: true,
    },
    type1: {
      type: String,
      required: true,
    },
    type2: {
      type: String,
      required: false,
      default: null,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    newClass: {
      type: String,
      default: "",
    },
  },
};
</script>
<!-- 
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

    &--grass {
      background-color: var(--grass);
    }
    &--fire {
      background-color: var(--fire);
    }
    &--water {
      background-color: var(--water);
    }
    &--bug {
      background-color: var(--bug);
    }
    &--normal {
      background-color: var(--normal);
    }
    &--electric {
      background-color: var(--electric);
    }
    &--poison {
      background-color: var(--poison);
    }
    &--ground {
      background-color: var(--ground);
    }
    &--fighting {
      background-color: var(--fighting);
    }
    &--psychic {
      background-color: var(--psychic);
    }
    &--fairy {
      background-color: var(--fairy);
    }
    &--rock {
      background-color: var(--rock);
    }
    &--ghost {
      background-color: var(--ghost);
    }
    &--ice {
      background-color: var(--ice);
    }
    &--dragon {
      background-color: var(--dragon);
    }
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
</style> -->

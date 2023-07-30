<template>
  <div
    v-if="pokedex"
    :class="'pokemon-background bg-' + pokedex.type[0].toLowerCase()"
  >
    <div class="pokemon-container">
      <p class="pokemon-id">#{{ pokedex.num }}</p>
      <h1 class="pokemon-name">{{ pokedex.name.english }}</h1>
      <div class="pokemon-informations">
        <div class="pokemon-left">
          <p :class="'pokemon-japanese text--' + pokedex.type[0].toLowerCase()">
            {{ pokedex.name.japanese }}
          </p>
          <img
            class="pokemon-image"
            :src="'/images/' + pokedex.num + pokedex.name.english + '.png'"
            alt=""
          />
        </div>
        <div class="pokemon-right">
          <div class="pokemon-type">
            <img
              class="pokemon-pintype"
              v-for="(type, index) in pokedex.type"
              :key="index"
              :src="'/images/' + type.toLowerCase() + '.png'"
              :alt="type"
            />
          </div>

          <div class="pokemon-measurements">
            <p
              class="pokemon-measurement"
              :class="
                'bg-' + pokedex.type[0].toLocaleLowerCase() + '--secondary'
              "
            >
              {{ pokedex.height }}
            </p>
            <p
              class="pokemon-measurement"
              :class="
                'bg-' + pokedex.type[0].toLocaleLowerCase() + '--secondary'
              "
            >
              {{ pokedex.weight }}
            </p>
          </div>

          <p class="pokemon-description">Stats</p>
          <div class="pokemon-statistics">
            <div
              class="pokemon-stats"
              :class="
                'bg-' + pokedex.type[0].toLocaleLowerCase() + '--secondary'
              "
              v-for="(stat, name) in pokedex.base"
              :key="name"
            >
              <span
                class="pokemon-stats-name"
                :class="'bg-' + pokedex.type[0].toLocaleLowerCase()"
              >
                {{ name }}
              </span>
              <span class="pokemon-stats-number">
                {{ stat }}
              </span>
            </div>
          </div>
          <p class="pokemon-description">Weaknesses</p>
          <div class="pokemon-weaknesses">
            <img
              class="pokemon-weaknesses-logo"
              v-for="(weaknesse, index) in pokedex.weaknesses"
              :key="index"
              :src="'/images/' + weaknesse.toLowerCase() + '.png'"
              :alt="weaknesse"
            />
          </div>
          <p class="pokemon-description">Evolution</p>
          <div class="pokemon-statistics">
            <!-- Previous Evolution -->
            <div v-if="pokedex.prev_evolution">
              <p class="evolution-title">Previous Evolution</p>
              <div
                v-for="prevEvolution in pokedex.prev_evolution"
                :key="prevEvolution.num"
                class="evolution-info"
              >
                <p class="evolution-name">{{ prevEvolution.name.english }}</p>
                <img
                  :src="
                    '/images/' +
                    prevEvolution.num +
                    prevEvolution.name +
                    '.png'
                  "
                  :alt="prevEvolution.name"
                  class="evolution-image"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="pokemon-region">Pokedex : Region - Kanto</p>
      <NuxtLink :class="'pokemon-back ' + pokedex.type[0].toLowerCase()" to="/"
        ><img src="/images/arrow.png" alt=""
      /></NuxtLink>
    </div>
  </div>
</template>
  
  
  <script>
export default {
  name: "PokemonPage",
  components: {},
  head() {
    return {
      bodyAttrs: {
        class: "pokemon-page",
      },
    };
  },
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  computed: {
    pokedex() {
      return this.$store.state.pokedex[this.id];
    },
  },
  
  async mounted() {
    await this.$store.dispatch("fetchPokedex");
  },
};
</script>


<style lang="scss" scoped>
.pokemon {
  &-background {
    height: 100vh;
    padding: 60px 40px;
    box-sizing: border-box;
    @media screen and (max-width: 576px) {
      min-height: 100vh;
      padding: 30px 20px;
      height: auto;
    }
  }
  &-name {
    color: white;
  }
  &-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  &-back {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 0;
    right: 0;
    img {
      width: 35px;
      height: 35px;
      transform: rotate(180deg);
    }
  }
  &-informations {
    display: flex;
    flex-direction: row;
    margin-top: 40px;

    @media screen and (max-width: 992px) {
      margin-top: 70px;
      flex-direction: column;
    }
    @media screen and (max-width: 768px) {
      margin-top: 35px;
    }
  }
  &-left {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-right: 90px;
    @media screen and (max-width: 992px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-right: 0;
    }
  }
  &-japanese {
    position: absolute;
    font-size: 120px;
    font-weight: bold;
    top: 10%;
    left: 5%;
    font-family: "Nanum", sans-serif;
    opacity: 0.7;
    user-select: none;
    width: 100%;
    @media screen and (max-width: 1200px) {
      font-size: 80px;
    }
    @media screen and (max-width: 992px) {
      position: relative;
      font-size: 46px;
      top: auto;
      right: auto;
      margin-bottom: 20px;
    }
  }
  &-image {
    max-height: 400px;
    z-index: 2;
    @media screen and (max-width: 1200px) {
      max-height: 300px;
    }
    @media screen and (max-width: 576px) {
      max-height: 250px;
    }
  }
  &-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    box-sizing: border-box;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
  &-type {
    margin: 30px 0;
  }

  &-pintype {
    margin: 0 10px;
  }
  &-description {
    color: white;
    margin-bottom: 26px;
    font-weight: bold;
    font-size: 32px;
    margin-top: 12px;
    @media screen and (max-width: 992px) {
      font-size: 24px;
    }
  }
  &-measurements {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  &-measurement {
    padding: 9px 30px;
    text-align: center;
    margin: 10px 0 0 0;
    border-radius: 12px;
    font-weight: bold;
    margin: 12px;
    color: white;
  }
  &-statistics {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 12px;
    position: relative;
    padding-left: 12px;
    &::before {
      content: "";
      display: block;
      opacity: 0.6;
      width: 4px;
      top: 0;
      right: auto;
      bottom: 10px;
      left: 0;
      background: white;
      position: absolute;
      border-radius: 2px;
      height: 100%;
    }
  }
  &-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 3px;
    padding: 4px 4px 12px 4px;
    border-radius: 20px;
    font-size: 14px;
    width: 36px;
    color: white;
    font-weight: bold;
    &-name {
      border-radius: 50%;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-number {
      margin-top: 16px;
    }
  }

  &-weaknesses {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 12px;
    &-logo {
      widows: 40px;
      height: 40px;
      margin: 0 2px;
    }
  }
  &-region {
    color: white;
    position: absolute;
    bottom: 0;
    transform: rotate(-90deg) translateY(20px) translateX(30px);
    transform-origin: 0 100%;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    @media screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
  &-stat {
    font-family: "Roboto", sans-serif;
    margin-right: 10px;
    padding: 10px 20px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: row;
    display: inline-block;
    border-radius: 16px;
    color: white;
    font-weight: bold;
    @media screen and (max-width: 992px) {
      font-size: 12px;
      margin-right: 4px;
      margin-bottom: 8px;
    }
  }
  &-id {
    font-family: "Roboto", sans-serif;
    color: white;
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 28px;
  }
  &-name {
    font-family: "Roboto", sans-serif;
    color: white;
    font-weight: bold;
    font-size: 36px;
  }
}
</style>
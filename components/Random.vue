<template>
  <div class="random" :class="'bg-' + randomClass">
    <img class="random-image" :src="randomImage" :alt="randomName" />
    <p class="random-num">#{{ randomNum }}</p>
    <p class="random-name">{{ randomName }}</p>
    <div class="random-types">
      <p
        class="random-type"
        :class="'bg-' + type.toLocaleLowerCase() + '--secondary'"
        v-for="(type, index) in randomTypes"
        :key="index"
      >
        {{ type }}
      </p>
    </div>
    <div class="random-informations">
      <p
        class="random-information"
        :class="'bg-' + randomTypes[0].toLocaleLowerCase() + '--secondary'"
      >
        {{ randomHeight }}
      </p>
      <p
        class="random-information"
        :class="'bg-' + randomTypes[0].toLocaleLowerCase() + '--secondary'"
      >
        {{ randomWeight }}
      </p>
    </div>
    <p class="random-weaknesse">WEAKNESSES</p>
    <div class="random-weaknesses">
      <img
        class="random-weaknesse-logo"
        v-for="(weaknesse, index) in randomWeaknesses"
        :key="index"
        :src="'/images/' + weaknesse.toLowerCase() + '.png'"
        :alt="weaknesse"
      />
    </div>
    <p class="random-weaknesse">STATS</p>
    <div class="random-weaknesses">
      <div
        class="random-stats"
        :class="'bg-' + randomTypes[0].toLocaleLowerCase() + '--secondary'"
        v-for="(stat, name) in randomStats"
        :key="name"
      >
        <span class="random-stats-name" :class="'bg-' + randomTypes[0].toLocaleLowerCase()">
          {{ name }}
        </span>
        <span class="random-stats-number">
          {{ stat }}
        </span>
      </div>
    </div>
    <!-- evoolution -->
  </div>
</template>

<script>
export default {
  props: {
    randomImage: {
      type: String,
      required: true,
    },
    randomHeight: {
      type: String,
      required: true,
    },
    randomStats: {
      type: Object,
      required: true,
    },
    randomWeaknesses: {
      type: Array,
      required: true,
    },
    randomWeight: {
      type: String,
      required: true,
    },
    randomTypes: {
      type: Array,
      required: true,
    },
    randomId: {
      type: Number,
      required: false,
    },
    randomNum: {
      type: String,
      required: true,
    },
    randomName: {
      type: String,
      required: true,
    },
    randomClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.random {
  padding: 24px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  color: white;
  position: relative;
  
  &-image {
    height: 180px;
    position: absolute;
    top: -90px;
  }
  &-num {
    margin-top: 80px;
    font-size: 16px;
  }
  &-name {
    font-size: 24px;
    margin-top: 12px;
  }
  &-types {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  &-type {
    padding: 9px 30px;
    text-align: center;
    margin: 10px 0 0 0;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    margin: 12px;
  }
  &-informations {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  &-information {
    padding: 9px 30px;
    text-align: center;
    margin: 10px 0 0 0;
    border-radius: 12px;
    font-weight: bold;
    margin: 12px;
  }
  &-weaknesse {
    margin: 16px 0;
    &-logo {
      widows: 30px;
      height: 30px;
      margin: 0 2px;
    }
  }
  &-weaknesses {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 12px;
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
}
</style>


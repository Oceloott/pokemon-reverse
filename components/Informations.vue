<template>
  <div
    class="informations-card"
    :class="'bg-' + informationType.toLowerCase() + ' ' + informationClass"
  >
    <p
      class="informations-japanese color-default"
      :class="'color-' + informationType.toLowerCase() + '--secondary'"
    >
      {{ informationNameJap }}
    </p>
    <p class="informations-name">{{ informationName }}</p>
    <div class="informations-information">
      <div class="informations-content">
        <div class="flex flex-row" v-if="skillsAccu | skillsPower | skillsPp">
          <div
            class="informations-stats"
            v-if="skillsAccu"
            :class="'bg-' + informationType.toLowerCase() + '--secondary'"
          >
            <span
              class="informations-stats-name"
              :class="'bg-' + informationType.toLowerCase()"
            >
              Acu
            </span>
            <span class="informations-stats-number">
              {{ skillsAccu }}
            </span>
          </div>
          <div
            class="informations-stats"
            v-if="skillsPower"
            :class="'bg-' + informationType.toLowerCase() + '--secondary'"
          >
            <span
              class="informations-stats-name"
              :class="'bg-' + informationType.toLowerCase()"
            >
              PwR
            </span>
            <span class="informations-stats-number">
              {{ skillsPower }}
            </span>
          </div>
          <div
            class="informations-stats"
            v-if="skillsPp"
            :class="'bg-' + informationType.toLowerCase() + '--secondary'"
          >
            <span
              class="informations-stats-name"
              :class="'bg-' + informationType.toLowerCase()"
            >
              Pp
            </span>
            <span class="informations-stats-number">
              {{ skillsPp }}
            </span>
          </div>
        </div>
        <p class="informations-description" v-if="informationDescription">
          {{ informationDescription | truncate(60) }}
        </p>
      </div>
      <div class="informations-visual" v-if="informationImage">
        <img
          class="informations-image"
          :src="informationImage"
          :alt="informationName"
        />
      </div>
      <div class="informations-visual" v-if="skillsType">
        <img class="informations-image" :src="skillsType" :alt="skillsType" />
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    informationName: {
      type: String,
      required: true,
    },
    informationNameJap: {
      type: String,
      required: true,
    },
    informationType: {
      type: String,
      required: true,
    },
    informationId: {
      type: Number,
      required: false,
    },
    informationClass: {
      type: String,
      required: false,
    },
    informationDescription: {
      type: String,
      default: "",
      required: false,
    },
    informationImage: {
      type: String,
      required: false,
    },
    skillsType: {
      type: String,
      required: false,
    },
    skillsAccu: {
      type: Number,
      required: false,
    },
    skillsPp: {
      type: Number,
      required: false,
    },
    skillsPower: {
      type: Number,
      required: false,
    },
  },
//   truncate descritption
  filters: {
    truncate(value, maxLength) {
      if (!value) return "";
      if (value.length <= maxLength) return value;
      return value.slice(0, maxLength) + "...";
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.informations {
  &-card {
    padding: 15px 25px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 10px 35px;
    margin: 10px;
    width: auto;
    max-height: 150px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  &-japanese {
    position: absolute;
    font-weight: bold;
    font-size: 90px;
    white-space: nowrap;
    z-index: 0;
    opacity: 0.3;
    user-select: none;
  }
  &-information {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  &-visual {
    width: 30%;
    height: 100px;
    display: flex;
    justify-content: right;
    align-items: flex-end;
  }
  &-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  &-name {
    margin: 5px 0;
    width: 100%;
    font-weight: bold;
    font-size: 24px;
  }
  &-image {
    height: 50px;
    z-index: 1;
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
}
</style>
  
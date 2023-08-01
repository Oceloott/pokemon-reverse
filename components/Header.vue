<template>
  <div class="navbar" :class="{ 'navbar-open': isNavbarOpen }">
    <NuxtLink class="navbar-link navbar-link-home" to="/">
      <img class="navbar-link-image" src="/images/pokeballheader.png" alt="" />
    </NuxtLink>
    <NuxtLink class="navbar-link" to="/">Pokedex</NuxtLink>
    <NuxtLink class="navbar-link" to="skills">Skills</NuxtLink>
    <NuxtLink class="navbar-link" to="items">Items</NuxtLink>
    <a
      href="javascript:void(0);"
      class="navbar-link-icon"
      @click="toggleNavbar()"
    >
      <img src="/images/menubars.svg" alt="menu bars" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-bottom: 24px;
  margin-top: 36px;
  border-radius: 24px;
  padding: 0 24px;
  height: 70px;
  @media screen and (max-width: 992px) {
    position: relative;
    height: auto;
  }
  &-link {
    color: black;
    text-align: center;
    padding: 25px 16px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    float: left;
    &:not(:first-child) {
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
    &:hover {
      border-bottom: solid 2px #ff5350;
      background-color: rgba(255, 83, 80, 0.115);
      @media screen and (max-width: 992px) {
        border-bottom: none;
      }
    }

    &-home {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      &:hover {
        border-bottom: 0;
        background-color: white;

      }
    }
    &-image {
      width: 40px;
      height: 40px;
      transition: all 0.3s linear 0s;
      &:hover {
        rotate: 180deg;
      }
    }
    &-icon {
      display: none;
      height: 30px;
      width: 30px;
      @media screen and (max-width: 992px) {
        display: block;
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
  &-open {
    flex-direction: column;
    & .navbar-link {
      float: none;
      display: block;
      text-align: left;
      &-home {
        justify-content: left;
      }
    }
  }
}
</style>
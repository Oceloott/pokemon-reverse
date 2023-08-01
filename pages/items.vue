<template>
  <div class="container">
    <Header />
    <!-- Searchbar -->
    <div class="items-filter">
      <div class="items-search">
        <img class="items-search-loop" src="/images/search.svg" alt="" />
        <input
          class="items-search-bar"
          type="text"
          v-model="searchTerm"
          placeholder="Recherche..."
        />
      </div>
    </div>
    <!-- ItemList -->

    <div class="items-list">
      <Informations
        v-for="item in filteredItemsList"
        :key="item.id"
        :informationName="item.name.english"
        :informationNameJap="item.name.japanese"
        :informationDescription="item.description"
        :informationType="item.type"
        :informationClass="'color-black'"
        :informationImage="`/items/` + item.id + '.png'"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Informations from "@/components/Informations.vue";

export default {
  name: "ItemsPage",
  components: {
    Informations,
    Header,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    // Get Items
    items() {
      return this.$store.state.items.items;
    },
    filteredItemsList() {
      // Filter by search
      let filteredList = this.items.filter((items) =>
        items.name.english.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      return filteredList;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchItems");
  },
};
</script>

<style lang="scss" scoped>
.items {
  &-search {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 26px;
    margin: 20px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &-loop {
      width: 15px;
      width: 15px;
      margin: 0 16px;
    }
    &-bar {
      width: 100%;
      background-color: transparent;
      height: 48px;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
  &-list{
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: repeat(1, 1fr);
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  
  }
}
</style>

function loadItems() {
  return require('~/static/items.json');
}

export const state = () => ({
  items: []
});

export const mutations = {
  SET_ITEMS(state, data) {
    state.items = data;
  }
};

export const actions = {
  async fetchItems({ commit }) {
    const itemsData = loadItems();
    commit('SET_ITEMS', itemsData);
  }
};

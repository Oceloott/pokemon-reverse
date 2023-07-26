// Cette fonction permet de charger le fichier pokedex.json depuis le dossier static
function loadPokedex() {
  return require('~/static/pokedex.json');
}

export const state = () => ({
  pokedex: []
});

export const mutations = {
  SET_POKEDEX(state, data) {
    state.pokedex = data;
  }
};

export const actions = {
  async fetchPokedex({ commit }) {
    const pokedexData = loadPokedex();
    commit('SET_POKEDEX', pokedexData);
  }
};

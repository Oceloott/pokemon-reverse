function loadSkills() {
  return require('~/static/moves.json');
}

export const state = () => ({
  skills: []
});

export const mutations = {
  SET_SKILLS(state, data) {
    state.skills = data;
  }
};

export const actions = {
  async fetchSkills({ commit }) {
    const skillsData = loadSkills();
    commit('SET_SKILLS', skillsData);
  }
};

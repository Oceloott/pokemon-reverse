// store/index.js

import Vuex from 'vuex';
import { state, mutations, actions } from './pokedex';

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  });
};

export default createStore;

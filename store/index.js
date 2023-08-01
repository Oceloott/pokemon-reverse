import Vuex from 'vuex';
import { state as pokedexState, mutations as pokedexMutations, actions as pokedexActions } from './pokedex';
import { state as itemsState, mutations as itemsMutations, actions as itemsActions } from './items';
import { state as skillsState, mutations as skillsMutations, actions as skillsActions } from './skills';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      pokedex: {
        state: pokedexState,
        mutations: pokedexMutations,
        actions: pokedexActions
      },
      items: {
        state: itemsState,
        mutations: itemsMutations,
        actions: itemsActions
      },
      skills: {
        state: skillsState,
        mutations: skillsMutations,
        actions: skillsActions
      }
    }
  });
};

export default createStore;

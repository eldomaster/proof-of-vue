import Vue from 'vue';
import Vuex from 'vuex';
import { AuthStore } from './api';
import { RootState } from './root-state';

Vue.use(Vuex);

// initial state of the application
const initState = (): RootState => ({
  init: false,
});

export default new Vuex.Store<RootState>({
  state: initState,
  mutations: {
    init: state => {
      console.log('App initialized');
      state.init = true;
    },
  },
  actions: {},
  modules: {
    AuthStore: AuthStore,
  },
});

// export of state and sub-stores (modules)
export * from './root-state';
export * from './api';

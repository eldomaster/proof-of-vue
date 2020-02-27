import Vue from 'vue';
import Vuex from 'vuex';
import { AuthStore } from './api';
import { RootState } from './root-state';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    init: false
  },
  mutations: {},
  actions: {},
  modules: {
    AuthStore: AuthStore,
  },
});


export * from './root-state';
export * from './api';
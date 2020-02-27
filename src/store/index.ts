import Vue from 'vue';
import Vuex from 'vuex';
import { AuthStore, AuthState } from './api';

Vue.use(Vuex);

export default new Vuex.Store<AuthState>({
  state: {} as AuthState,
  mutations: {},
  actions: {},
  modules: {
    AuthStore: AuthStore,
  },
});

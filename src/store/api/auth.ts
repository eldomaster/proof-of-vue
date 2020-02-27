import { Module } from 'vuex';

export interface AuthState {
  loggendIn: boolean;
  loginError: string | undefined;
  username: string | undefined;
  count: number;
}

const base: string = 'AuthStore/';
export const AuthActions = {
  INCREMENT: base + 'increment',
  SETCOUNT: base + 'setCount',
};

export const AuthStore: Module<AuthState, any> = {
  namespaced: true,
  state: {
    loggendIn: false,
    loginError: undefined,
    username: undefined,
    count: 1,
  },

  getters: {
    // not needed for now?
    getNumber: (state: AuthState) => {
      return state.count;
    },
  },

  mutations: {
    setCount: (state, payload) => {
      // mutate state
      console.log('Mutation fired');
      state.count = payload;
    },
  },

  actions: {
    increment({ commit, state }) {
      // possible async code
      console.log('Action fired');
      commit('setCount', state.count + 1);
    },

    setCount({ commit }, payload: { count: number }) {
      console.log(`Action fired with payload: ${payload.count}`);
      commit('setCount', payload.count);
    },
  },
};

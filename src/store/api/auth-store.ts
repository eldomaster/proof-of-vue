import { Module, ActionTree, GetterTree, Action, MutationTree } from 'vuex';
import { RootState } from '../root-state';
import { AuthState, AuthInfo } from './auth-state';

// initial state of the application
const initState = (): AuthState => ({
  info: {
    loggendIn: false,
    loginError: undefined,
    username: undefined,
    token: undefined,
  },
  count: 1,
});

const base: string = 'AuthStore/';

/**
 * getters for state,
 * can return whole state, or parts like count or info.
 * getter could call other function to map the state properties
 * String contnt for better accessability
 */
export const AuthGetters = {
  count: base + 'getCount',
  state: base + 'getState',
};
const getters: GetterTree<AuthState, RootState> = {
  // not needed for now?
  getCount: (state: AuthState) => state.count,
  getState: (state: AuthState) => state,
};

/**
 * actions for state,
 * can have sideeffects (like effects in ngrx or redux)
 * String contnt for better accessability
 */
export const AuthActions = {
  INCREMENT: base + 'increment',
  SET_COUNT: base + 'setCount',
  TRY_LOGIN: base + 'tryLogin',
  LOGOFF: base + 'logoff',
};
const actions: ActionTree<AuthState, RootState> = {
  /**
   * increments the count variable
   */
  increment: ({ commit, state }) => {
    // possible async code
    console.log('Action fired');
    commit('setCount', state.count + 1);
  },

  /**
   * sets the count variable in the state
   */
  setCount: ({ commit }, payload: { count: number }) => {
    console.log('Action fired');
    commit('setCount', payload.count);
  },

  tryLogin: ({ commit }, payload: { username: string; password: string }) => {
    // TODO: "make" api call here, implement error state
    console.log('Action fired');
    commit('setInfo', {
      loggendIn: true,
      username: payload.username,
    } as AuthInfo);
  },

  /**
   * resets state info and logoff
   */
  logoff: ({ commit }) => {
    console.log('Action fired');
    commit('setInfo', {
      ...initState().info
    } as AuthInfo);
  },
};

// mutations for state (like reducers in redux)
const mutations: MutationTree<AuthState> = {
  setCount: (state, payload: number) => {
    // mutate state
    console.log('Mutation fired');
    state.count = payload;
  },

  setInfo: (state, payload: AuthInfo) => {
    console.log('Mutation fired');
    console.log(payload);
    state.info = { ...state.info, ...payload };
  },
};

export const AuthStore: Module<AuthState, RootState> = {
  namespaced: true,
  state: initState,
  getters: getters,
  mutations: mutations,
  actions: actions,
};

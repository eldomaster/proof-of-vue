import { Module } from 'vuex';
import { AuthState } from '.';

export interface RootState extends RootModules {
  init: boolean;
}

// update with all moduls for code completion
export interface RootModules {
  AuthStore?: Module<AuthState, RootState>;
}

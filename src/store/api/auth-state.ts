export interface AuthState {
  count: number;
  info: AuthInfo;
}

export interface AuthInfo {
  loggendIn: boolean;
  loginError?: string;
  username?: string;
  token?: string;
}
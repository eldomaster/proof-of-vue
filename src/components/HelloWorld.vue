<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment()">Increment</button>
    <button @click="setCount(1)">Set to 1</button>
    <button @click="logInOff()">{{ info.loggendIn ? 'Logoff' : 'login' }}</button>
    <br />
    <br />
    Count: <input v-numbers type="text" :value="count" @change="updateCount($event)" placeholder="TestInput" />
    <p>authState: {{ authState }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { MutationPayload } from 'vuex';
import { AuthActions, AuthGetters, AuthState, AuthInfo } from '../store/api';
import store, { RootState } from '@/store';
import { numberDirective } from '@/directives';

@Component({
  computed: {
    // alternativ for getters
    // count: (): number => store.getters[AuthGetters.count],
    // authState: (): AuthState => store.getters[AuthGetters.state],
    // info: (): AuthInfo => store.getters[AuthGetters.state].info,
  },
  directives: {
    numbers: numberDirective,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Emit()
  updateName(): string {
    const str: string = this.authState?.info?.username ? 'User ' + this.authState?.info?.username : 'Not logged in!';
    return str;
  }

  updateCount(event: Event & { target: HTMLInputElement }): void {
    this.$store.dispatch(AuthActions.SET_COUNT, { count: Number.parseInt(event.target.value) });
  }

  @Emit('update:msg')
  updateMsg(): string {
    return this.authState.info?.loggendIn ? 'Welcome!' : 'Hello';
  }

  subscriptions: Array<() => void> = [];

  // info!: AuthInfo; // must be set to access info when used with computed in @Component

  // alternative for computed properties in @Component
  get count(): number {
    return this.$store.getters[AuthGetters.count];
  }
  get authState(): AuthState {
    return this.$store.getters[AuthGetters.state];
  }
  get info(): AuthInfo {
    return this.$store.getters[AuthGetters.state].info;
  }

  increment(): void {
    this.$store.dispatch(AuthActions.INCREMENT);
  }

  setCount(count: number = 5): void {
    this.$store.dispatch(AuthActions.SET_COUNT, { count: count });
  }

  logInOff(): void {
    if (this.info?.loggendIn) this.$store.dispatch(AuthActions.LOGOFF);
    else this.$store.dispatch(AuthActions.TRY_LOGIN, { username: 'eldo', password: 'eldo' });
  }

  created(): void {
    this.subscriptions.push(
      this.$store.subscribe((mut: MutationPayload, state: RootState) => {
        this.updateName();
        this.updateMsg();
        console.log(mut);
        console.log(state);
      })
    );
  }

  destroyed(): void {
    console.log('unsubscribe from store');
    this.subscriptions.forEach(func => func());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

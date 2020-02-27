<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment()">Increment</button>
    <button @click="setCount(1)">Set to 1</button>
    <button @click="logInOff()">{{ info.loggendIn ? 'Logoff' : 'login' }}</button>
    <p v-if="!!count">{{ count }}</p>
    <p>state: {{ authState }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MutationPayload } from 'vuex';
import { AuthActions, AuthGetters, AuthState, AuthInfo } from '../store/api';
import store from '../store';

@Component({
  computed: {
    count: (): number => store.getters[AuthGetters.count],
    authState: (): AuthState => store.getters[AuthGetters.state],
    info: (): AuthInfo => store.getters[AuthGetters.state].info,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  subscriptions: Array<() => void> = [];

  info!: AuthInfo;

  increment(): void {
    this.$store.dispatch(AuthActions.INCREMENT);
    console.log(this.info);
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
      this.$store.subscribe((s: MutationPayload) => {
        console.log(s);
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

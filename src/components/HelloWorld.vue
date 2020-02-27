<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment()">Increment</button>
    <button @click="setCount(1)">Set to 1</button>
    <p v-if="!!count">{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MutationPayload } from 'vuex';
import { AuthActions, AuthState } from '../store/api';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  authState: AuthState = this.$store.state.AuthStore;

  subscriptions: Array<() => void> = [];

  increment(): void {
    this.$store.dispatch(AuthActions.INCREMENT);
  }

  setCount(count: number = 5): void {
    this.$store.dispatch(AuthActions.SETCOUNT, { count: count });
  }

  get count(): number {
    return this.authState?.count;
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

<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <p>{{ username }}</p>
    <HelloWorld msg="Hello" @update-name="setUSername($event)" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Hello extends Vue {
  username: string = 'Username';

  setUSername(event: string): void {
    console.log(event);
    this.username = event;
  }
}
</script>

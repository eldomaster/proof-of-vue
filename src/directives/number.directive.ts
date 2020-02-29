import { DirectiveOptions } from 'vue';

export const numberDirective: DirectiveOptions = {
  bind(el: HTMLElement) {
    const elRef = el as HTMLInputElement;
    elRef.addEventListener('input', () => {
      console.log(el);
      const regex = /^[0-9]*$/;
      if (!regex.test(elRef.value)) {
        elRef.value = elRef.value.slice(0, -1);
      }
    });
  },
};

import { defineNuxtPlugin } from "#imports";

import { useEnvVar } from "./composables/useEnvVar";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      // injects $useEnvVar in the Nuxt app instance
      // const { $useEnvVar } = useNuxtApp();
      useEnvVar,
    },
  };
});

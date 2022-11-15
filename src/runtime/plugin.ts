import { defineNuxtPlugin } from "#imports";

import { useEnvVar } from "./composables/useEnvVar";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      useEnvVar,
    },
  };
});

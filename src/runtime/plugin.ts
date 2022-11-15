import { defineNuxtPlugin } from "../../playground/.nuxt/imports";

import { useEnvVar } from "./composables/useEnvVar";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      useEnvVar,
    },
  };
});

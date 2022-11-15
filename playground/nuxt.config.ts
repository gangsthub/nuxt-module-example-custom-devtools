import { defineNuxtConfig } from 'nuxt/config';
import CustomDevtools from '..';

export default defineNuxtConfig({
  modules: [CustomDevtools],
  runtimeConfig: {
    public: { testEnvVar: 'test' },
  },
  customDevtools: {},
});

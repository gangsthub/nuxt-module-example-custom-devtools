import {
  createResolver,
  defineNuxtModule,
  addPlugin,
  addComponentsDir,
} from "@nuxt/kit";
import defu from "defu";

import { ModuleOptions } from "./types";
export type { ModuleOptions };

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "custom-devtools",
    configKey: "customDevtools",
  },
  defaults: {
    openByDefault: true,
    rootClass: "nuxt-custom-devtools",
    defaultPosition: "top-left",
    closeViaEscapeKey: true,
  },
  setup(options, nuxt) {
    const isDev = nuxt.options.dev;
    if (isDev) {
      console.log("Custom Devtools - Running in dev mode");
    }

    // options
    nuxt.options.runtimeConfig.public.customDevtools = defu(
      nuxt.options.runtimeConfig.public.customDevtools,
      options
    );

    const { resolve } = createResolver(import.meta.url);

    // Add plugin
    addPlugin(resolve("./runtime/plugin"));

    // Add components
    addComponentsDir({ path: resolve("./runtime/components") });
  },
});

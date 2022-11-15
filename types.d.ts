import type { ComputedRef, ToRefs } from "vue";

declare module "#app" {
  interface NuxtApp {
    $useEnvVar: ComputedRef<any>;
  }
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $useEnvVar: ComputedRef<any>;
  }
}
export {};

import { useRuntimeConfig } from "#app";
import { PublicRuntimeConfig } from "@nuxt/schema";

export function useCustomRuntimeConfig() {
  const staticConfig: Partial<PublicRuntimeConfig> = Object.assign(
    {},
    useRuntimeConfig().public
  );
  // do not include this module config in the DevTools
  delete staticConfig.customDevtools;

  return staticConfig;
}

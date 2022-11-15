import { useRuntimeConfig } from "#app";
import { PublicRuntimeConfig } from "@nuxt/schema";

export function useCustomRuntimeConfig() {
  const staticConfig: Partial<PublicRuntimeConfig> = Object.assign(
    {},
    useRuntimeConfig().public
  );
  delete staticConfig.customDevtools;

  return staticConfig;
}

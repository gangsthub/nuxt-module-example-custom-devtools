import { useStorage, type RemovableRef } from "@vueuse/core";
import { useRuntimeConfig } from "#app";
import type { ModuleOptions } from "../../types";

export function useModuleConfig(): {
  moduleConfig: RemovableRef<ModuleOptions>;
} {
  const moduleConfig = useStorage(
    "module-config",
    useRuntimeConfig().public.customDevtools
  );
  return { moduleConfig };
}

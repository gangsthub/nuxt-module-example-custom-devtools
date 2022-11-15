import { useRuntimeConfig } from "#app";
import type { ModuleOptions } from "../../types";

export function useModuleConfig(): { moduleConfig: ModuleOptions } {
  const moduleConfig = useRuntimeConfig().public.customDevtools;
  return { moduleConfig };
}

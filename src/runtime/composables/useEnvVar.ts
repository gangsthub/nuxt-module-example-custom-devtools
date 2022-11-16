import { computed } from "vue";

import { useDevToolsModel } from "./useDevToolsModel";

export function useEnvVar(key: string) {
  const { model: customConfig } = useDevToolsModel();

  if (!key || !(key in customConfig.value)) {
    throw new Error(
      `Custom Devtools - ${String(key)} is not defined in form config`
    );
  }

  return computed(() => customConfig.value[key]);
}

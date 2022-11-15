import { computed } from "vue";

import { useDevToolsModel } from "./useDevToolsModel";
import { useCustomRuntimeConfig } from "./useCustomRuntimeConfig";

export function useEnvVar(key: string) {
  const config = useCustomRuntimeConfig();
  const { model: customConfig } = useDevToolsModel(config);

  if (!key || !(key in customConfig.value)) {
    throw new Error(
      `Custom Devtools - ${String(key)} is not defined in form config`
    );
  }

  return computed(() => customConfig.value[key]);
}

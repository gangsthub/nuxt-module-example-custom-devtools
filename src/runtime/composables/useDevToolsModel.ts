import { ref } from "vue";
import { AnyConfig } from "../../types";

export function useDevToolsModel(config: AnyConfig) {
  const model = ref(config || {});
  return {
    model,
  };
}

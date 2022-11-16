import { useState } from "#app";
import { useCustomRuntimeConfig } from "./useCustomRuntimeConfig";

export const useDevToolsModel = (
  posibleValues?: Record<string, any> | undefined
) => {
  const initialState = useCustomRuntimeConfig();

  const model = useState("config", () => {
    return initialState;
  });

  const preDefinedOptions = useState("preDefinedOptions", () => {
    return {};
  });
  if (posibleValues) {
    preDefinedOptions.value = {
      ...preDefinedOptions.value,
      posibleValues,
    };
  }

  const resetModel = () => {
    model.value = Object.assign({}, initialState);
  };

  return {
    preDefinedOptions,
    model,
    resetModel,
  };
};

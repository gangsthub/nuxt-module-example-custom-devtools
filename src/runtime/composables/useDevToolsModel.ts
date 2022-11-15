import { useState } from "#app";
import { useCustomRuntimeConfig } from "./useCustomRuntimeConfig";

export const useDevToolsModel = () => {
  const initialState = useCustomRuntimeConfig();

  const model = useState("config", () => {
    return initialState;
  });

  const resetModel = () => {
    model.value = Object.assign({}, initialState);
  };

  return {
    model,
    resetModel,
  };
};

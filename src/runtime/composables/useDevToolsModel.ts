import { ref } from "vue";
import { useState } from "#app";
import { useCustomRuntimeConfig } from "./useCustomRuntimeConfig";

export const useDevToolsModel = () =>
  useState("config", () => {
    return useCustomRuntimeConfig();
  });

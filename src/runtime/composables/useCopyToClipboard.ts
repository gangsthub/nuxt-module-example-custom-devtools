import { useRoute } from "#imports";

import { useDevToolsModel } from "./useDevToolsModel";

export function useCopyToClipboard() {
  const copy = (text: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return {
    copy: () => {
      const url = useRoute().path;
      const queryParams = new URLSearchParams(url);

      const currentModel = useDevToolsModel().model.value;

      Object.entries(currentModel).forEach(([key, value]) => {
        if (typeof value === "string") {
          queryParams.set(key, value);
        }
      });

      copy(queryParams.toString());
    },
  };
}

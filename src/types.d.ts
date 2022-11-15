export type AnyConfig = Record<string, any>;

export interface ModuleOptions {
  openByDefault: boolean;
  rootClass: string;
  defaultPosition: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  closeViaEscapeKey: boolean;
}

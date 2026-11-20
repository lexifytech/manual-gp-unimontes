interface VLibrasWidgetOptions {
  rootPath?: string;
  personalization?: string;
  avatar?: "icaro" | "hosana" | "guga" | "random";
  position?: "R" | "L";
}

interface VLibrasWidgetConstructor {
  new (options: VLibrasWidgetOptions): unknown;
  new (
    rootPath: string,
    personalization?: string,
    avatar?: string,
    position?: string,
  ): unknown;
}

interface VLibrasNamespace {
  Widget: VLibrasWidgetConstructor;
}

declare global {
  interface Window {
    VLibras?: VLibrasNamespace;
    /** Evita dupla inicialização (Strict Mode / recarregamento do script). */
    __vlibrasManualInit?: boolean;
  }
}

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    vw?: string;
    "vw-access-button"?: string;
    "vw-plugin-wrapper"?: string;
  }
}

export {};
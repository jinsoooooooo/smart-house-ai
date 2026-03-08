export {};

declare global {
  interface Window {
    ENV?: {
      VITE_API_BASE_URL?: string;
    };
  }

  interface ImportMeta {
    env: {
      VITE_API_BASE_URL?: string;
      [key: string]: string | undefined;
    };
  }
}

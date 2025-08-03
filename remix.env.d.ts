/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_API_KEY: string;
  }
}
// TypeScript Version: 3.3

/// <reference path="./app.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="./page.d.ts" />
/// <reference path="./api/index.d.ts" />

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

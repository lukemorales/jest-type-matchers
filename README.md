<p align="center">
  <a href="https://github.com/lukemorales/jest-type-matchers"><img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9ea.png" alt="Testing tube emoji" height="130"/ target="\_parent"></a>
</p>

<h1 align="center">jest-type-matchers</h1>

<p align="center">
  <a href="https://github.com/lukemorales/jest-type-matchers/actions/workflows/tests.yml"><img src="https://github.com/lukemorales/jest-type-matchers/actions/workflows/tests.yml/badge.svg?branch=main" alt="Latest build" target="\_parent"></a>
  <a href="https://www.npmjs.com/package/@lukemorales/jest-type-matchers"><img src="https://badgen.net/npm/v/@lukemorales/jest-type-matchers" alt="Latest published version" target="\_parent"></a>
  <a href="https://bundlephobia.com/package/@lukemorales/jest-type-matchers@latest"><img src="https://badgen.net/bundlephobia/minzip/@lukemorales/jest-type-matchers" alt="Bundlephobia" target="\_parent"></a>
  <a href="https://bundlephobia.com/package/@lukemorales/jest-type-matchers@latest"><img src="https://badgen.net/bundlephobia/tree-shaking/@lukemorales/jest-type-matchers" alt="Tree shaking available" target="\_parent"></a>
  <a href="https://github.com/lukemorales/jest-type-matchers"><img src="https://badgen.net/npm/types/@lukemorales/jest-type-matchers" alt="Types included" target="\_parent"></a>
  <a href="https://www.npmjs.com/package/@lukemorales/jest-type-matchers"><img src="https://badgen.net/npm/license/@lukemorales/jest-type-matchers" alt="License" target="\_parent"></a>
  <a href="https://www.npmjs.com/package/@lukemorales/jest-type-matchers"><img src="https://badgen.net/npm/dt/@lukemorales/jest-type-matchers" alt="Number of downloads" target="\_parent"></a>
  <a href="https://github.com/lukemorales/jest-type-matchers"><img src="https://img.shields.io/github/stars/lukemorales/jest-type-matchers.svg?style=social&amp;label=Star" alt="GitHub Stars" target="\_parent"></a>
</p>

<p align="center">
  <strong>Custom <a href="https://jestjs.io alt="Jest" target="\_parent">jest</a> matchers to test the state of your types.</strong>
</p>

<p align="center">
  You write Typescript and want assert various things about the state of your types?<br />This library provides a set of custom matchers that you can use to extend jest<br />and assert your test results against expected types.
</p>

## 📦 Install
This library is available as a package on NPM, install with your favorite package manager:

```dircolors
npm install --save-dev @lukemorales/jest-type-matchers
```

## ⚡ Quick start
Import `@lukemorales/jest-type-matchers` once in your [tests setup
file](
  https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array):

```ts
// In your jest-setup.ts (or any other name)
import '@lukemorales/jest-type-matchers';

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
```

### Custom Matchers
These custom matchers allow you to just check your types. This means that they will **never** fail your test suite because type-checking happens at compile-time only.

#### `toHaveType`
```ts
expect(true).toHaveType<boolean>();

type Result = { ok: boolean } & { data: null };

const res: Result = { ok: true, data: null };
expect(res).toHaveType<{ ok: boolean; data: null }>();
```
This allows you to check that a variable has an expected type.

#### `toNotHaveType`
```ts
expect('hello world').toNotHaveType<number>();
```
This allows you to check that a variable does not have a specific type.

#### `toHaveStrictType`
```ts
expect(true).toHaveStrictType<boolean>();

type Result = { ok: boolean } & { data: null };

const res: Result = { ok: true, data: null };
expect(res).toHaveStrictType<{ ok: boolean } & { data: null }>();
```
This allows you to check that a variable is strict equal to an expected type.

#### `toNotHaveStrictType`
```ts
expect('hello world').toNotHaveStrictType<number>();
```
This allows you to check that a variable is not strict equal to a specific type.

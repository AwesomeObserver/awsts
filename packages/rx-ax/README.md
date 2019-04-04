# `@awesome-observer/rx-ax`

[![npm downloads](https://badgen.net/npm/dt/@awesome-observer/rx-ax?icon=npm&color=green)](https://www.npmjs.com/package/@awesome-observer/rx-ax)

# RxAx - simple and powerful HTTP request library, based on RxJS and axios.

## Instalation

RxAx has peer dependency rxjs

```shell
yarn add @awesome-observer/rx-ax rxjs
or
npm i @awesome-observer/rx-ax rxjs
```

## API

```ts
// Configuration for RxAx
RxAxInstance.config();
// Request
RxAxInstance.request<T>();
// Get
RxAxInstance.get<T>();
// Delete
RxAxInstance.delete<T>();
// Head
RxAxInstance.head<T>();
// Post
RxAxInstance.post<T>();
// Put
RxAxInstance.put<T>();
// Patch
RxAxInstance.patch<T>();
```

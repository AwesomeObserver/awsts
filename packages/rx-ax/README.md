# `@awesome-observer/rx-ax`

> RxAx - wrapper over Axios with RxJs.

## Instalation

RxAx has peer dependency rxjs

```nix
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

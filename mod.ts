// Copyright 2022-2024 the oak authors. All rights reserved.

/**
 * Provides a router which specifically tailored for providing RESTful
 * endpoints.
 *
 * @example
 * ```ts
 * import { Router } from "jsr:@oak/acorn/router";
 *
 * const router = new Router();
 *
 * router.get("/", () => ({ hello: "world" }));
 *
 * const BOOKS = {
 *   "1": { title: "The Hound of the Baskervilles" },
 *   "2": { title: "It" },
 * };
 *
 * router.get("/books/:id", (ctx) => BOOKS[ctx.params.id]);
 *
 * router.listen({ port: 3000 });
 * ```
 *
 * @module
 */

export { type Context } from "./context.ts";
export { type SigningData, type SigningKey } from "./deps.ts";
export { auth, immutable } from "./handlers.ts";
export { default as DenoServer } from "./http_server_deno.ts";
export {
  HandledEvent,
  NotFoundEvent,
  type RouteHandler,
  type RouteOptions,
  type RouteOptionsWithHandler,
  type RouteParameters,
  Router,
  RouterErrorEvent,
  type RouteResponse,
  RouterListenEvent,
  type RouterOptions,
  RouterRequestEvent,
  type RouterRequestEventInit,
} from "./router.ts";
export { type Deserializer, type KeyRing, type Serializer } from "./types.ts";

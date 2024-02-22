import fastifyCors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext, router } from "./index";

export const server = fastify({
  maxParamLength: 5000,
});

server.register(fastifyCors, {
  origin: "*",
});

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    createContext,
    router,
  },
});

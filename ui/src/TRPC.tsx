import type { Router } from ":api/index";
import { createTRPCReact } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const Client = createTRPCReact<Router>({});

export type ClientInputs = inferRouterInputs<Router>;

export type ClientOutputs = inferRouterOutputs<Router>;

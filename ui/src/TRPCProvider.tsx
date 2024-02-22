import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { httpLink } from "@trpc/client";
import { ReactElement, ReactNode, useState } from "react";

import SuperJSON from "superjson";
import { Client } from "./TRPC";

export type TRPCProviderProps = {
  children: ReactNode;
};

export function TRPCProvider({ children }: TRPCProviderProps): ReactElement {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            useErrorBoundary: true,
          },
          queries: {
            useErrorBoundary: true,
          },
        },
      }),
  );

  let url = "http://localhost:3000/trpc";

  if (process.env.NODE_ENV === "production") {
    url = "https://cdk-exercise-api.services.appointedd.com/trpc";
  }

  const [trpcClient] = useState(() =>
    Client.createClient({
      links: [
        httpLink({
          url,
        }),
      ],
      transformer: SuperJSON,
    }),
  );

  return (
    <Client.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Client.Provider>
  );
}

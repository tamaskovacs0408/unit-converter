import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import App from "@/App.tsx";
import "@/index.scss";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ONE_DAY_MS,
      gcTime: ONE_DAY_MS,
      retry: 2,
    },
  },
});

const persister = createSyncStoragePersister({ storage: window.localStorage });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister, maxAge: ONE_DAY_MS }}
    >
      <App />
    </PersistQueryClientProvider>
  </React.StrictMode>
);

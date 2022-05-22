import { createTRPCClient } from "./deps.ts";
import type { AppRouter } from "./server.ts";

// error: symbols are not the same
const client = createTRPCClient<AppRouter>({ url: "http://localhost:3000" });

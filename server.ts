import { router } from "./deps.ts";

export const appRouter = router().query("hello", {
  resolve() {
    return "world";
  },
});

export type AppRouter = typeof appRouter;

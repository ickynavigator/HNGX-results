import { stage1Router } from '~/server/api/routers/stageRouter';
import { createTRPCRouter, mergeRouters } from '~/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  stages: mergeRouters(stage1Router),
});

// export type definition of API
export type AppRouter = typeof appRouter;

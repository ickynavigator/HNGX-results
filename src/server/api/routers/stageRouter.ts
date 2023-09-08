import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const stage1Router = createTRPCRouter({
  stage1GetFailed: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.stage1UserFailed.findMany({
      select: { username: true, grade: true },
    });
    return users;
  }),
  stage1GetPassed: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.stage1User.findMany({
      select: { username: true, grade: true },
    });
    return users;
  }),
});

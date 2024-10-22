/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.AchievementInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).achievement.createMany(input as any))),

        create: procedure.input($Schema.AchievementInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).achievement.create(input as any))),

        deleteMany: procedure.input($Schema.AchievementInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).achievement.deleteMany(input as any))),

        delete: procedure.input($Schema.AchievementInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).achievement.delete(input as any))),

        findFirst: procedure.input($Schema.AchievementInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).achievement.findFirst(input as any))),

        findMany: procedure.input($Schema.AchievementInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).achievement.findMany(input as any))),

        findUnique: procedure.input($Schema.AchievementInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).achievement.findUnique(input as any))),

        updateMany: procedure.input($Schema.AchievementInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).achievement.updateMany(input as any))),

        update: procedure.input($Schema.AchievementInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).achievement.update(input as any))),

        count: procedure.input($Schema.AchievementInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).achievement.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AchievementCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AchievementCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AchievementCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AchievementCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AchievementCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AchievementCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AchievementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AchievementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AchievementCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AchievementCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AchievementGetPayload<T>, Context>) => Promise<Prisma.AchievementGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AchievementDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AchievementDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AchievementDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AchievementDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AchievementDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AchievementDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AchievementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AchievementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AchievementDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AchievementDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AchievementGetPayload<T>, Context>) => Promise<Prisma.AchievementGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AchievementFindFirstArgs, TData = Prisma.AchievementGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AchievementFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AchievementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AchievementFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AchievementFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AchievementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AchievementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AchievementFindManyArgs, TData = Array<Prisma.AchievementGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AchievementFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AchievementGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AchievementFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AchievementFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AchievementGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AchievementGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AchievementFindUniqueArgs, TData = Prisma.AchievementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AchievementFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AchievementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AchievementFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AchievementFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AchievementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AchievementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AchievementUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AchievementUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AchievementUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AchievementUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AchievementUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AchievementUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AchievementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AchievementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AchievementUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AchievementUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AchievementGetPayload<T>, Context>) => Promise<Prisma.AchievementGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AchievementCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AchievementCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AchievementCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AchievementCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AchievementCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AchievementCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AchievementCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AchievementCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

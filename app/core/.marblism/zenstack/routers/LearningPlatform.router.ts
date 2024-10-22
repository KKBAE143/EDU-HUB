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

        createMany: procedure.input($Schema.LearningPlatformInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPlatform.createMany(input as any))),

        create: procedure.input($Schema.LearningPlatformInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPlatform.create(input as any))),

        deleteMany: procedure.input($Schema.LearningPlatformInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPlatform.deleteMany(input as any))),

        delete: procedure.input($Schema.LearningPlatformInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPlatform.delete(input as any))),

        findFirst: procedure.input($Schema.LearningPlatformInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).learningPlatform.findFirst(input as any))),

        findMany: procedure.input($Schema.LearningPlatformInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).learningPlatform.findMany(input as any))),

        findUnique: procedure.input($Schema.LearningPlatformInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).learningPlatform.findUnique(input as any))),

        updateMany: procedure.input($Schema.LearningPlatformInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPlatform.updateMany(input as any))),

        update: procedure.input($Schema.LearningPlatformInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPlatform.update(input as any))),

        count: procedure.input($Schema.LearningPlatformInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).learningPlatform.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LearningPlatformCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPlatformCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPlatformCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPlatformCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LearningPlatformCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPlatformCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LearningPlatformGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LearningPlatformGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPlatformCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPlatformCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LearningPlatformGetPayload<T>, Context>) => Promise<Prisma.LearningPlatformGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LearningPlatformDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPlatformDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPlatformDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPlatformDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LearningPlatformDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPlatformDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LearningPlatformGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LearningPlatformGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPlatformDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPlatformDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LearningPlatformGetPayload<T>, Context>) => Promise<Prisma.LearningPlatformGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LearningPlatformFindFirstArgs, TData = Prisma.LearningPlatformGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.LearningPlatformFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LearningPlatformGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LearningPlatformFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.LearningPlatformFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LearningPlatformGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LearningPlatformGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LearningPlatformFindManyArgs, TData = Array<Prisma.LearningPlatformGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.LearningPlatformFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LearningPlatformGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LearningPlatformFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.LearningPlatformFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LearningPlatformGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LearningPlatformGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LearningPlatformFindUniqueArgs, TData = Prisma.LearningPlatformGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LearningPlatformFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LearningPlatformGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LearningPlatformFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LearningPlatformFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LearningPlatformGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LearningPlatformGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LearningPlatformUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPlatformUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPlatformUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPlatformUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LearningPlatformUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPlatformUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LearningPlatformGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LearningPlatformGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPlatformUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPlatformUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LearningPlatformGetPayload<T>, Context>) => Promise<Prisma.LearningPlatformGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.LearningPlatformCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.LearningPlatformCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.LearningPlatformCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LearningPlatformCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.LearningPlatformCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.LearningPlatformCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LearningPlatformCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.LearningPlatformCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

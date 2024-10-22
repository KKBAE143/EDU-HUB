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

        createMany: procedure.input($Schema.CurriculumItemInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).curriculumItem.createMany(input as any))),

        create: procedure.input($Schema.CurriculumItemInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).curriculumItem.create(input as any))),

        deleteMany: procedure.input($Schema.CurriculumItemInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).curriculumItem.deleteMany(input as any))),

        delete: procedure.input($Schema.CurriculumItemInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).curriculumItem.delete(input as any))),

        findFirst: procedure.input($Schema.CurriculumItemInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).curriculumItem.findFirst(input as any))),

        findMany: procedure.input($Schema.CurriculumItemInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).curriculumItem.findMany(input as any))),

        findUnique: procedure.input($Schema.CurriculumItemInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).curriculumItem.findUnique(input as any))),

        updateMany: procedure.input($Schema.CurriculumItemInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).curriculumItem.updateMany(input as any))),

        update: procedure.input($Schema.CurriculumItemInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).curriculumItem.update(input as any))),

        count: procedure.input($Schema.CurriculumItemInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).curriculumItem.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CurriculumItemCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurriculumItemCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurriculumItemCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurriculumItemCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CurriculumItemCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurriculumItemCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CurriculumItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CurriculumItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurriculumItemCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurriculumItemCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CurriculumItemGetPayload<T>, Context>) => Promise<Prisma.CurriculumItemGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CurriculumItemDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurriculumItemDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurriculumItemDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurriculumItemDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CurriculumItemDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurriculumItemDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CurriculumItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CurriculumItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurriculumItemDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurriculumItemDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CurriculumItemGetPayload<T>, Context>) => Promise<Prisma.CurriculumItemGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CurriculumItemFindFirstArgs, TData = Prisma.CurriculumItemGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CurriculumItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CurriculumItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CurriculumItemFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CurriculumItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CurriculumItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CurriculumItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CurriculumItemFindManyArgs, TData = Array<Prisma.CurriculumItemGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CurriculumItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CurriculumItemGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CurriculumItemFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CurriculumItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CurriculumItemGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CurriculumItemGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CurriculumItemFindUniqueArgs, TData = Prisma.CurriculumItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CurriculumItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CurriculumItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CurriculumItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CurriculumItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CurriculumItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CurriculumItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CurriculumItemUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurriculumItemUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurriculumItemUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurriculumItemUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CurriculumItemUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CurriculumItemUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CurriculumItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CurriculumItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CurriculumItemUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CurriculumItemUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CurriculumItemGetPayload<T>, Context>) => Promise<Prisma.CurriculumItemGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CurriculumItemCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CurriculumItemCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CurriculumItemCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CurriculumItemCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CurriculumItemCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CurriculumItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CurriculumItemCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CurriculumItemCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

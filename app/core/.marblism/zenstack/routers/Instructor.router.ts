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

        createMany: procedure.input($Schema.InstructorInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).instructor.createMany(input as any))),

        create: procedure.input($Schema.InstructorInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).instructor.create(input as any))),

        deleteMany: procedure.input($Schema.InstructorInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).instructor.deleteMany(input as any))),

        delete: procedure.input($Schema.InstructorInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).instructor.delete(input as any))),

        findFirst: procedure.input($Schema.InstructorInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).instructor.findFirst(input as any))),

        findMany: procedure.input($Schema.InstructorInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).instructor.findMany(input as any))),

        findUnique: procedure.input($Schema.InstructorInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).instructor.findUnique(input as any))),

        updateMany: procedure.input($Schema.InstructorInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).instructor.updateMany(input as any))),

        update: procedure.input($Schema.InstructorInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).instructor.update(input as any))),

        count: procedure.input($Schema.InstructorInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).instructor.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.InstructorCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstructorCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstructorCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstructorCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.InstructorCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstructorCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InstructorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InstructorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstructorCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstructorCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InstructorGetPayload<T>, Context>) => Promise<Prisma.InstructorGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.InstructorDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstructorDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstructorDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstructorDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.InstructorDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstructorDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InstructorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InstructorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstructorDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstructorDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InstructorGetPayload<T>, Context>) => Promise<Prisma.InstructorGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.InstructorFindFirstArgs, TData = Prisma.InstructorGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.InstructorFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InstructorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InstructorFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.InstructorFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InstructorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InstructorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.InstructorFindManyArgs, TData = Array<Prisma.InstructorGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.InstructorFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.InstructorGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InstructorFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.InstructorFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.InstructorGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.InstructorGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.InstructorFindUniqueArgs, TData = Prisma.InstructorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InstructorFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InstructorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InstructorFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InstructorFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InstructorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InstructorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.InstructorUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstructorUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstructorUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstructorUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.InstructorUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InstructorUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InstructorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InstructorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InstructorUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InstructorUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InstructorGetPayload<T>, Context>) => Promise<Prisma.InstructorGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.InstructorCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.InstructorCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.InstructorCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.InstructorCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.InstructorCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.InstructorCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.InstructorCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.InstructorCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

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

        createMany: procedure.input($Schema.EnrollmentInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).enrollment.createMany(input as any))),

        create: procedure.input($Schema.EnrollmentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).enrollment.create(input as any))),

        deleteMany: procedure.input($Schema.EnrollmentInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).enrollment.deleteMany(input as any))),

        delete: procedure.input($Schema.EnrollmentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).enrollment.delete(input as any))),

        findFirst: procedure.input($Schema.EnrollmentInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).enrollment.findFirst(input as any))),

        findMany: procedure.input($Schema.EnrollmentInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).enrollment.findMany(input as any))),

        findUnique: procedure.input($Schema.EnrollmentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).enrollment.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnrollmentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).enrollment.updateMany(input as any))),

        update: procedure.input($Schema.EnrollmentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).enrollment.update(input as any))),

        count: procedure.input($Schema.EnrollmentInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).enrollment.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnrollmentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnrollmentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnrollmentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnrollmentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnrollmentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnrollmentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnrollmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnrollmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnrollmentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnrollmentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnrollmentGetPayload<T>, Context>) => Promise<Prisma.EnrollmentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnrollmentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnrollmentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnrollmentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnrollmentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnrollmentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnrollmentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnrollmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnrollmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnrollmentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnrollmentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnrollmentGetPayload<T>, Context>) => Promise<Prisma.EnrollmentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnrollmentFindFirstArgs, TData = Prisma.EnrollmentGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnrollmentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnrollmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnrollmentFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnrollmentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnrollmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnrollmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnrollmentFindManyArgs, TData = Array<Prisma.EnrollmentGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnrollmentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnrollmentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnrollmentFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnrollmentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnrollmentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnrollmentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnrollmentFindUniqueArgs, TData = Prisma.EnrollmentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnrollmentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnrollmentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnrollmentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnrollmentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnrollmentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnrollmentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnrollmentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnrollmentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnrollmentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnrollmentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnrollmentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnrollmentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnrollmentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnrollmentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnrollmentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnrollmentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnrollmentGetPayload<T>, Context>) => Promise<Prisma.EnrollmentGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnrollmentCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnrollmentCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnrollmentCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnrollmentCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnrollmentCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnrollmentCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnrollmentCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnrollmentCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

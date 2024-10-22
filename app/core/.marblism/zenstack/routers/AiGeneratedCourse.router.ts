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

        createMany: procedure.input($Schema.AiGeneratedCourseInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiGeneratedCourse.createMany(input as any))),

        create: procedure.input($Schema.AiGeneratedCourseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiGeneratedCourse.create(input as any))),

        deleteMany: procedure.input($Schema.AiGeneratedCourseInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiGeneratedCourse.deleteMany(input as any))),

        delete: procedure.input($Schema.AiGeneratedCourseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiGeneratedCourse.delete(input as any))),

        findFirst: procedure.input($Schema.AiGeneratedCourseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).aiGeneratedCourse.findFirst(input as any))),

        findMany: procedure.input($Schema.AiGeneratedCourseInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).aiGeneratedCourse.findMany(input as any))),

        findUnique: procedure.input($Schema.AiGeneratedCourseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).aiGeneratedCourse.findUnique(input as any))),

        updateMany: procedure.input($Schema.AiGeneratedCourseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiGeneratedCourse.updateMany(input as any))),

        update: procedure.input($Schema.AiGeneratedCourseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).aiGeneratedCourse.update(input as any))),

        count: procedure.input($Schema.AiGeneratedCourseInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).aiGeneratedCourse.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AiGeneratedCourseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiGeneratedCourseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiGeneratedCourseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiGeneratedCourseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AiGeneratedCourseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiGeneratedCourseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiGeneratedCourseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiGeneratedCourseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiGeneratedCourseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiGeneratedCourseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiGeneratedCourseGetPayload<T>, Context>) => Promise<Prisma.AiGeneratedCourseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AiGeneratedCourseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiGeneratedCourseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiGeneratedCourseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiGeneratedCourseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AiGeneratedCourseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiGeneratedCourseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiGeneratedCourseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiGeneratedCourseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiGeneratedCourseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiGeneratedCourseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiGeneratedCourseGetPayload<T>, Context>) => Promise<Prisma.AiGeneratedCourseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AiGeneratedCourseFindFirstArgs, TData = Prisma.AiGeneratedCourseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AiGeneratedCourseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiGeneratedCourseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiGeneratedCourseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AiGeneratedCourseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiGeneratedCourseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiGeneratedCourseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AiGeneratedCourseFindManyArgs, TData = Array<Prisma.AiGeneratedCourseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AiGeneratedCourseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AiGeneratedCourseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiGeneratedCourseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AiGeneratedCourseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AiGeneratedCourseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AiGeneratedCourseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AiGeneratedCourseFindUniqueArgs, TData = Prisma.AiGeneratedCourseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AiGeneratedCourseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AiGeneratedCourseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AiGeneratedCourseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AiGeneratedCourseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AiGeneratedCourseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AiGeneratedCourseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AiGeneratedCourseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiGeneratedCourseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiGeneratedCourseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiGeneratedCourseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AiGeneratedCourseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AiGeneratedCourseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AiGeneratedCourseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AiGeneratedCourseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AiGeneratedCourseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AiGeneratedCourseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AiGeneratedCourseGetPayload<T>, Context>) => Promise<Prisma.AiGeneratedCourseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AiGeneratedCourseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AiGeneratedCourseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AiGeneratedCourseCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AiGeneratedCourseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AiGeneratedCourseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AiGeneratedCourseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AiGeneratedCourseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AiGeneratedCourseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

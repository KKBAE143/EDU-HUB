/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createLearningPlatformRouter from "./LearningPlatform.router";
import createCourseRouter from "./Course.router";
import createInstructorRouter from "./Instructor.router";
import createCurriculumItemRouter from "./CurriculumItem.router";
import createEnrollmentRouter from "./Enrollment.router";
import createReviewRouter from "./Review.router";
import createAchievementRouter from "./Achievement.router";
import createSubscriptionRouter from "./Subscription.router";
import createAiGeneratedCourseRouter from "./AiGeneratedCourse.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as LearningPlatformClientType } from "./LearningPlatform.router";
import { ClientType as CourseClientType } from "./Course.router";
import { ClientType as InstructorClientType } from "./Instructor.router";
import { ClientType as CurriculumItemClientType } from "./CurriculumItem.router";
import { ClientType as EnrollmentClientType } from "./Enrollment.router";
import { ClientType as ReviewClientType } from "./Review.router";
import { ClientType as AchievementClientType } from "./Achievement.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as AiGeneratedCourseClientType } from "./AiGeneratedCourse.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        learningPlatform: createLearningPlatformRouter(router, procedure),
        course: createCourseRouter(router, procedure),
        instructor: createInstructorRouter(router, procedure),
        curriculumItem: createCurriculumItemRouter(router, procedure),
        enrollment: createEnrollmentRouter(router, procedure),
        review: createReviewRouter(router, procedure),
        achievement: createAchievementRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        aiGeneratedCourse: createAiGeneratedCourseRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    learningPlatform: LearningPlatformClientType<AppRouter>;
    course: CourseClientType<AppRouter>;
    instructor: InstructorClientType<AppRouter>;
    curriculumItem: CurriculumItemClientType<AppRouter>;
    enrollment: EnrollmentClientType<AppRouter>;
    review: ReviewClientType<AppRouter>;
    achievement: AchievementClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    aiGeneratedCourse: AiGeneratedCourseClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
}

import * as trpc from "@trpc/server";
import { createRouter } from "./context";
import { z } from "zod";

const attendanceAnswerParser = z.object({
	going: z.boolean(),
	willBringPartner: z.boolean(),
	letter: z.string().optional(),
	dish: z.enum(["REGULAR", "VEGETARIAN"]),
});

function throwIfUnauthorized(objectExists: any): asserts objectExists {
	if (!objectExists) {
		throw new trpc.TRPCError({
			code: "UNAUTHORIZED",
			message: "Log in and try again",
		});
	}
}

export const attendanceRouter = createRouter()
	.query("givenAnswer", {
		async resolve({ ctx: { session, prisma } }) {
			throwIfUnauthorized(session);

			const user = await prisma.user.findUnique({
				where: {
					id: session.user?.id,
				},
				select: {
					attendance: true,
				},
			});

			return { attendance: user?.attendance || null };
		},
	})
	.mutation("answer", {
		input: attendanceAnswerParser,
		async resolve({ input, ctx: { session, prisma } }) {
			throwIfUnauthorized(session);
			const { user } = session;
			throwIfUnauthorized(user);

			return await prisma.attendance.create({
				data: {
					authorId: user.id,
					...input,
				},
			});
		},
	})
	.mutation("updateAnswer", {
		input: attendanceAnswerParser,
		async resolve({ input, ctx: { session, prisma } }) {
			throwIfUnauthorized(session);
			const { user } = session;
			throwIfUnauthorized(user);

			return await prisma.attendance.update({
				where: {
					authorId: user.id,
				},
				data: input,
			});
		},
	});

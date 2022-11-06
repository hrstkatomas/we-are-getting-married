import { createProtectedRouter } from "./context";
import { z } from "zod";

const attendanceAnswerParser = z.object({
	going: z.boolean(),
	numberOfAttendees: z.number(),
	letter: z.string().optional(),
});

export const attendanceRouter = createProtectedRouter()
	.query("givenAnswer", {
		async resolve({ ctx: { session, prisma } }) {
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
		async resolve({
			input,
			ctx: {
				session: { user },
				prisma,
			},
		}) {
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
		async resolve({
			input,
			ctx: {
				session: { user },
				prisma,
			},
		}) {
			return await prisma.attendance.update({
				where: {
					authorId: user.id,
				},
				data: input,
			});
		},
	});

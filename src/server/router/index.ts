import { createRouter } from "./context";
import superjson from "superjson";

import { attendanceRouter } from "./attendance";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("attendance.", attendanceRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

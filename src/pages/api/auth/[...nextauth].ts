import NextAuth, { type NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
	callbacks: {
		session({ session, user }) {
			// Include user.id on session
			if (session.user) session.user.id = user.id;
			return session;
		},
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		Auth0Provider({
			clientId: env.AUTH0_CLIENT_ID,
			clientSecret: env.AUTH0_CLIENT_SECRET,
			issuer: env.AUTH0_ISSUER,
		}),
	],
};

export default NextAuth(authOptions);

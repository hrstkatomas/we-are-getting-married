import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

type SignInProps = {
	session: Session | null;
};

export const SignIn = ({ session }: SignInProps) => {
	if (session) {
		return (
			<>
				<p>Jsi přihlášen jako {session.user?.email}</p>
				<div className="card-actions justify-end">
					<button
						className="btn btn-primary"
						onClick={() => signOut()}
					>
						Odhlásit se
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<p>Nejsi přihlášen</p>
			<div className="card-actions justify-end">
				<button
					className="btn btn-primary"
					onClick={() => signIn("auth0")}
				>
					Přihlásit se
				</button>
			</div>
		</>
	);
};

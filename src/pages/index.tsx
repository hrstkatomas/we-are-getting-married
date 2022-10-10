import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
	const attendance = trpc.useQuery(["attendance.givenAnswer"]);
	console.log(attendance);

	return (
		<>
			<Head>
				<title>Tom a Zuzka se berou</title>
				<meta name="description" content="Tom a Zuzka se berou" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
				<Parallax pages={4}>
					<ParallaxLayer
						speed={0.5}
						style={{
							backgroundImage: "url(/Welcome.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></ParallaxLayer>

					<ParallaxLayer offset={0.75} speed={1.5}>
						{/*<div className="hero min-h-screen bg-base-100/10">*/}
						{/*	<div className="hero-content bg-opacity-60"></div>*/}
						{/*	<div className="hero-content text-center text-neutral-content">*/}
						{/*		<div className="max-w-lg">*/}
						{/*			<h1 className="mb-5 text-5xl font-bold">Budeme se brát</h1>*/}
						{/*			<p className="mb-5">Tom a Zuzka se berou!</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}
						<div className="card w-96 glass shadow-xl text-gray-700">
							<div className="card-body">
								<h1 className="card-title">Budeme se brát!</h1>
								<div className="card-actions justify-end">
									<p>Tom a Zuzka se berou.</p>
								</div>
							</div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer offset={0.9} speed={1} className="bg-slate-800">
						TODO: some info
					</ParallaxLayer>
				</Parallax>

				<div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
					{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
				</div>
				<SignInButton />
				<AnswerButton />
				<UpdateMyAnswerButton />
			</main>
		</>
	);
};

export default Home;

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const TechnologyCard = ({ name, description, documentation }: TechnologyCardProps) => {
	return (
		<section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
			<h2 className="text-lg text-gray-700">{name}</h2>
			<p className="text-sm text-gray-600">{description}</p>
			<a
				className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
				href={documentation}
				target="_blank"
				rel="noreferrer"
			>
				Documentation
			</a>
		</section>
	);
};

const SignInButton = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user?.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn("auth0")}>Sign in</button>
		</>
	);
};

const AnswerButton = () => {
	const mutation = trpc.useMutation(["attendance.answer"]);

	const answer = () => {
		mutation.mutate({
			going: true,
			willBringPartner: true,
			dish: "REGULAR",
		});
	};

	return <button onClick={answer}>Answer!</button>;
};

const UpdateMyAnswerButton = () => {
	const mutation = trpc.useMutation(["attendance.updateAnswer"]);

	const updateAnswer = () => {
		mutation.mutate({
			going: true,
			willBringPartner: false,
			dish: "VEGETARIAN",
		});
	};

	return <button onClick={updateAnswer}>Update my answer!</button>;
};

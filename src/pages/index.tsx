import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "@react-spring/core";
import Image from "next/image";
import welcomeImage from "../../public/Welcome.jpg";
import svgClouds from "../../public/svgClouds.svg";
import svgBackScene from "../../public/svgBackScene.svg";
import svgMiddleScene from "../../public/svgMiddleScene.svg";
import svgFrontScene from "../../public/svgFrontScene.svg";

const Home: NextPage = () => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
	const attendance = trpc.useQuery(["attendance.givenAnswer"]);
	console.log(attendance);

	return (
		<main className="container-sm mx-auto flex flex-col items-center justify-center min-h-screen p-4">
			<Parallax pages={4} config={config.default}>
				<ParallaxLayer speed={0.1} offset={0.08} className={"bg-stone-100"}>
					<Image src={welcomeImage} priority alt={"Úvodní fotka Toma a Zuzky"} />
				</ParallaxLayer>

				<ParallaxLayer factor={0.2} className={"flex flex-col items-center justify-center bg-stone-100"}>
					<div>
						<h1
							className={
								"text-4xl sm:text-5xl md:text-6xl font-cairo text-gray-700 animate-appear tracking-wider"
							}
						>
							Tom <span className={"font-dancing-sript text-stone-400"}>&</span> Zuzka
						</h1>
						<h2
							className={
								"text-xl sm:text-2xl md:text-3xl font-dancing-sript text-stone-400  animate-appear-delayed"
							}
						>
							se budou brát
						</h2>
					</div>
				</ParallaxLayer>

				<ParallaxLayer sticky={{ start: 1, end: 2 }} factor={0.1} offset={0.9} speed={1}>
					<div className="text-md breadcrumbs h-1/6 flex flex-col items-center justify-center bg-stone-100">
						<ul>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>Documents</a>
							</li>
							<li>
								<a>Add Document</a>
							</li>
						</ul>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.5} className="bg-slate-800">
					<Image src={svgClouds} alt={"mraky"} layout={"fill"} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.7}>
					<Image src={svgBackScene} alt={"hory"} layout={"fill"} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.9}>
					<Image src={svgMiddleScene} alt={"kopce"} layout={"fill"} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1.1}>
					<Image src={svgFrontScene} alt={"stodola"} layout={"fill"} />
				</ParallaxLayer>
			</Parallax>

			<div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
				{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
			</div>
			<SignInButton />
			<AnswerButton />
			<UpdateMyAnswerButton />
		</main>
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

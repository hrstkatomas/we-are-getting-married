import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from "next-auth/react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "@react-spring/core";
import { useRef } from "react";
import Head from "next/head";
import { SvgClouds } from "../components/SvgClouds";
import { HomeImage } from "../components/HomeImage";
import { Header } from "../components/Header";
import { SvgBackScene } from "../components/SvgBackScene";
import { SvgMiddleScene } from "../components/SvgMiddleScene";
import { SvgFrontScene } from "../components/SvgFrontScene";
import { Information } from "../components/Information";
import { Navigation } from "../components/Navigation";
import { TimeOfArival } from "../components/TimeOfArival";
import { BehindTheScenes } from "../components/BehindTheScenes";
import { Recapitulation } from "../components/Recapitulation";

const Home: NextPage = () => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
	const attendance = trpc.useQuery(["attendance.givenAnswer"]);
	console.log(attendance);

	const parallaxRef = useRef<IParallax>(null);

	return (
		<main className="container-sm mx-auto flex flex-col items-center justify-center min-h-screen p-4">
			<Head>
				<title>Tom a Zuzka se berou</title>
			</Head>

			<Parallax pages={7} config={config.default} ref={parallaxRef}>
				<ParallaxLayer offset={0.9999} factor={1.5} speed={0.5} className="bg-base-100">
					<SvgClouds />
				</ParallaxLayer>

				<ParallaxLayer speed={0.1} offset={0.1} className={"bg-base-100"}>
					<HomeImage />
				</ParallaxLayer>

				<ParallaxLayer factor={0.2} className={"flex flex-col items-center justify-center bg-base-100"}>
					<Header />
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 1, end: 2 }}
					factor={0.01}
					offset={0.9}
					speed={1}
					className={"pointer-events-none"}
				>
					<Navigation parallaxRef={parallaxRef} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.7}>
					<SvgBackScene />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.1} className={"flex flex-col items-center justify-center"}>
					<TimeOfArival />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.9} className={"pointer-events-none"}>
					<SvgMiddleScene />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1} className={"pointer-events-none"}>
					<SvgFrontScene />
				</ParallaxLayer>

				<ParallaxLayer offset={1.999} speed={1}>
					<Information />
					<Recapitulation />
				</ParallaxLayer>
			</Parallax>

			<BehindTheScenes />
			{/*<div className={"container mx-auto flex flex-col items-center justify-center p-4"}>*/}
			{/*	<div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3 w-full">*/}
			{/*		<iframe*/}
			{/*			width="600"*/}
			{/*			height="450"*/}
			{/*			loading="lazy"*/}
			{/*			allowFullScreen*/}
			{/*			src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ672Ch2iXC0cRXdr78q8ATQY&key=AIzaSyA2YeKQ2QLiZWlyQTQvSg1VZ-d69BBEj5I"*/}
			{/*		/>*/}
			{/*		<div> Hello another world</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			{/*<div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">*/}
			{/*	{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}*/}
			{/*</div>*/}
			{/*<SignInButton />*/}
			{/*<AnswerButton />*/}
			{/*<UpdateMyAnswerButton />*/}
		</main>
	);
};

export default Home;

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

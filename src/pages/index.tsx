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
				<ParallaxLayer offset={0.9999} factor={1.5} speed={0.5} className="bg-base-100">
					<Image src={svgClouds} alt={"mraky"} layout={"fill"} />
				</ParallaxLayer>

				<ParallaxLayer speed={0.1} offset={0.1} className={"bg-base-100"}>
					<div className={"relative h-full max-w-6xl m-auto"}>
						<Image
							src={welcomeImage}
							priority
							alt={"Úvodní fotka Toma a Zuzky"}
							layout={"fill"}
							objectFit={"cover"}
						/>
					</div>
				</ParallaxLayer>

				<ParallaxLayer factor={0.2} className={"flex flex-col items-center justify-center bg-base-100"}>
					<div>
						<h1
							className={
								"text-4xl sm:text-5xl md:text-6xl font-cairo text-base-content animate-appear tracking-wider"
							}
						>
							Tom <span className={"font-dancing-sript text-primary"}>&</span> Zuzka
						</h1>
						<h2
							className={
								"text-xl sm:text-2xl md:text-3xl font-dancing-sript text-primary animate-appear-delayed"
							}
						>
							se budou brát
						</h2>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 1, end: 2 }}
					factor={0.01}
					offset={0.9}
					speed={1}
					className={"pointer-events-none"}
				>
					<div className="text-md breadcrumbs h-20 flex flex-col items-center justify-center bg-stone-100 pointer-events-auto">
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

				<ParallaxLayer offset={1} speed={0.7}>
					<Image src={svgBackScene} alt={"hory"} layout={"fill"} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.1} className={"flex flex-col items-center justify-center"}>
					<div className="card bg-base-100 hover:shadow-xl bg-opacity-0 hover:bg-opacity-80 ease-in-out duration-500">
						<div className="card-body">
							<h2 className="card-title font-dancing-sript text-lg sm:text-xl lg:text-2xl mb-5">
								Svatba se koná
							</h2>
							<h1 className={"font-bold text-4xl sm:text-7xl lg:text-8xl font-cairo"}>13. května 2023</h1>
							<h2 className={"text-2xl sm:text-4xl lg:text-5xl"}>
								<span className={"font-dancing-sript"}>Sraz:</span> 10:30 - 11:00
							</h2>
							<h2 className={"text-2xl sm:text-4xl lg:text-5xl"}>
								<span className={"font-dancing-sript"}>Obřad:</span> 11:30
							</h2>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.9} className={"pointer-events-none"}>
					<Image src={svgMiddleScene} alt={"kopce"} layout={"fill"} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={1} className={"pointer-events-none"}>
					<Image src={svgFrontScene} alt={"stodola"} layout={"fill"} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.999} speed={1} className={"bg-base-200"}>
					<main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
						<h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold font-dancing-sript text-base-content">
							Co se to děje?
						</h1>
						<p className="font-cairo text-2xl text-primary">
							Milí svatebčané, tímto bychom Vás chtěli pozvat, abyste s námi strávili náš svatební den!
						</p>
						<div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
							<InfoCard
								name="Místo a příjezd"
								description="Místo i hostina se budou konat na jednom místě a to v Holyňské stodole v Praze 13.&nbsp;května&nbsp;2023. Obřad začne v 11:30, proto prosíme svatebčany, aby přijeli nejpozději půl hodiny předem. Počet parkovacích míst v místě je omezen, větší parkoviště je 5 minut chůze."
							/>
							<InfoCard
								name="Ubytování"
								description="K dispozici budeme mít celý penzion, lůžek však není mnoho a na všechny se bohužel nedostane. Přednost budou mít mimopražští hosté a hosté s dětmi. Protože budeme ale v Praze, taxíky/Bolty/Ubery/MHD Vás rozvezou do vlastních postýlek."
							/>
							<InfoCard
								name="Občerstvení"
								description="Již od příjezdu hostí bude připraveno občerstvení, na které po obřadě navážeme společným obědem a večer plánujeme grilovat. Nápoje potečou proudem až do noci, k dispozici bude plzeň, víno, nealko, káva."
							/>
							<InfoCard
								name="Dresscode"
								description="Svatba je slavnostní událost, proto prosíme, tepláky nechte doma. S formálností to také není potřeba přehnat, obřad bude v zahradě."
							/>
							<InfoCard
								name="Dary"
								description="Největší radost nám udělá dárek, který se vejde do obálky. "
							/>
							<InfoCard
								name="Potvrzení účasti"
								description="V následujícím formuláři, prosím, potvrď svou účast. Odpověď můžeš i později upravit."
							/>
						</div>
					</main>
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
};

const InfoCard = ({ name, description }: TechnologyCardProps) => {
	return (
		<div className="card bg-base-100 shadow-xl flex flex-col justify-center p-6 duration-500  shadow-xl motion-safe:hover:scale-105">
			<div className="card-body">
				<h2 className="card-title font-dancing-sript">{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
	// return (
	// 	<section className="flex flex-col justify-center p-6 duration-500 border-2 bg-neutral border rounded shadow-xl motion-safe:hover:scale-105">
	// 		<h2 className="text-lg text-base-content">{name}</h2>
	// 		<p className="text-sm text-neutral-content">{description}</p>
	// 	</section>
	// );
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

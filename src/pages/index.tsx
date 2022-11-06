import type { NextPage } from "next";
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
import { LookingForwardToIt } from "../components/LookingForwardToIt";

const Home: NextPage = () => {
	const parallaxRef = useRef<IParallax>(null);

	return (
		<main>
			<Head>
				<title>Tom a Zuzka se berou</title>
			</Head>

			<Parallax
				pages={7}
				config={config.default}
				ref={parallaxRef}
				className={"z-10"}
			>
				<ParallaxLayer
					offset={0.9999}
					factor={1.5}
					speed={0.5}
					className="bg-base-100"
				>
					<SvgClouds />
				</ParallaxLayer>

				<ParallaxLayer
					speed={0.1}
					offset={0.1}
					className={"bg-base-100"}
				>
					<HomeImage />
				</ParallaxLayer>

				<ParallaxLayer
					factor={0.2}
					className={
						"flex flex-col items-center justify-center bg-base-100"
					}
				>
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

				<ParallaxLayer
					offset={1}
					speed={0.1}
					className={"flex flex-col items-center justify-center"}
				>
					<TimeOfArival />
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.9}
					className={"pointer-events-none"}
				>
					<SvgMiddleScene />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1}
					speed={1}
					className={"pointer-events-none"}
				>
					<SvgFrontScene />
				</ParallaxLayer>

				<ParallaxLayer offset={1.999} speed={1}>
					<Information />
					<Recapitulation />
					<LookingForwardToIt />
				</ParallaxLayer>
			</Parallax>

			<BehindTheScenes />
		</main>
	);
};

export default Home;

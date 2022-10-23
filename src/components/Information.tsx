import React from "react";
import { InfoCard } from "./InfoCard";

export const Information = React.forwardRef<HTMLDivElement>((props, ref) => (
	<div ref={ref} className="bg-base-200">
		<div className={"container mx-auto flex flex-col items-center justify-center p-4"}>
			<h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold font-dancing-sript text-base-content">
				Co se to děje?
			</h1>
			<p className="font-cairo text-2xl text-primary">
				Milí svatebčané, tímto bychom Vás chtěli pozvat, abyste s námi strávili náš svatební den!
			</p>
			<div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3 w-full">
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
				<InfoCard name="Dary" description="Největší radost nám udělá dárek, který se vejde do obálky. " />
				<InfoCard
					name="Potvrzení účasti"
					description="V následujícím formuláři, prosím, potvrď svou účast. Odpověď můžeš i později upravit."
				/>
			</div>
		</div>
	</div>
));

Information.displayName = "Information";

import { InfoCard } from "./InfoCard";
import { Title } from "./Title";
import { Link } from "./Link";
import { LinkToAttendance } from "./NavLinks";

export function Information() {
	return (
		<div className="bg-base-200">
			<div
				className={
					"container mx-auto flex flex-col items-center justify-center p-4"
				}
			>
				<Title>Co se to děje?</Title>
				<p className="font-cairo text-2xl text-primary">
					Milí svatebčané, tímto bychom Vás chtěli pozvat, abyste s
					námi strávili náš svatební den!
				</p>
				<div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3 w-full">
					<InfoCard name="Místo a příjezd">
						Obřad i hostina se budou konat na jednom místě a to v{" "}
						<Link href={"http://holynskastodola.cz/"}>
							Holyňské stodole
						</Link>{" "}
						v Praze 13.&nbsp;května&nbsp;2023. Obřad začne v 11:30,
						proto prosíme svatebčany, aby přijeli nejpozději půl
						hodiny předem. Počet parkovacích míst v místě je omezen,{" "}
						<Link
							className="link text-primary-focus"
							href={"https://goo.gl/maps/XKoVBVFvBy1wzemp7"}
						>
							větší parkoviště je 5 minut chůze.
						</Link>
					</InfoCard>
					<InfoCard name="Ubytování">
						K dispozici budeme mít celý penzion, lůžek však není
						mnoho a na všechny se bohužel nedostane. Přednost budou
						mít mimopražští hosté a hosté s dětmi. Protože budeme
						ale v Praze,{" "}
						<Link href={"https://www.liftago.cz/"}>Liftaga</Link> /{" "}
						<Link href={"https://bolt.eu/"}>Bolty</Link> /{" "}
						<Link href={"https://www.uber.com/"}>Ubery</Link> /{" "}
						<Link
							href={
								"https://www.dpp.cz/aktualni-odjezdy?cis=67825&ds=N%C3%A1m%C4%9Bst%C3%AD+Olgy+Scheinpflugov%C3%A9"
							}
						>
							MHD
						</Link>{" "}
						Vás rozvezou do vlastních postýlek.
					</InfoCard>
					<InfoCard name="Občerstvení">
						Již od příjezdu hostí bude připraveno občerstvení, na
						které po obřadě navážeme společným obědem a večer
						plánujeme grilovat. Nápoje potečou proudem až do noci, k
						dispozici bude plzeň, víno, nealko, káva.
					</InfoCard>
					<InfoCard name="Dresscode">
						Svatba je slavnostní událost, proto prosíme, tepláky
						nechte doma. S formálností to také není potřeba přehnat,
						obřad bude v zahradě.
					</InfoCard>
					<InfoCard name="Dary">
						Největší radost nám udělá dárek, který se vejde do
						obálky.
					</InfoCard>
					<InfoCard name="Potvrzení účasti">
						V následujícím formuláři, prosím, potvrď svou účast.
						Odpověď můžeš i později upravit.
						<div className={"flex justify-center"}>
							<LinkToAttendance />
						</div>
					</InfoCard>
				</div>
			</div>
		</div>
	);
}

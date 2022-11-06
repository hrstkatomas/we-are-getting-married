export function Header() {
	return (
		<div>
			<h1
				className={
					"text-4xl sm:text-5xl md:text-6xl font-cairo text-base-content animate-appear tracking-wider"
				}
			>
				Tom <span className={"font-dancing-sript text-primary"}>&</span>{" "}
				Zuzka
			</h1>
			<h2
				className={
					"text-xl sm:text-2xl md:text-3xl font-dancing-sript text-primary animate-appear-delayed"
				}
			>
				se budou brát
			</h2>
		</div>
	);
}

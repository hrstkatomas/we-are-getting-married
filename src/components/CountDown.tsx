import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";
import { dateDifference, formatDateDifference } from "../utils/dateDiff";
import { Digit } from "./Digit";

const weddingDate = new Date("2023-05-13T11:30:00.000+02:00");

export function CountDown() {
	const [dateDiff, setDateDiff] = useState<number>(
		dateDifference(weddingDate, new Date()),
	);

	useTimeout(() => {
		setDateDiff(dateDifference(weddingDate, new Date()));
	}, 1_000);

	if (dateDiff <= 0) return <p className={"text-3xl"}>Svatba už proběhla.</p>;

	const { months, days, hours, minutes, seconds } =
		formatDateDifference(dateDiff);

	return (
		<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
			<Digit
				hideWhenZero
				count={months}
				pluralization={{ one: "měsíc", few: "měsíce", many: "měsíců" }}
			/>
			<Digit
				hideWhenZero
				count={days}
				pluralization={{ one: "den", few: "dny", many: "dní" }}
			/>
			<Digit
				count={hours}
				pluralization={{ one: "hodina", few: "hodiny", many: "hodin" }}
			/>
			<Digit
				count={minutes}
				pluralization={{ one: "minuta", few: "minuty", many: "minut" }}
			/>
			<Digit
				count={seconds}
				pluralization={{
					one: "sekunda",
					few: "sekundy",
					many: "sekund",
				}}
			/>
		</div>
	);
}

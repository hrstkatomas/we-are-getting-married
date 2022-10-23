import { CSSProperties, useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

type DateDifference = {
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

const dateDifference = (date1: Date, date2: Date): number => date1.getTime() - date2.getTime();

const formatDateDifference = (difference: number): DateDifference => {
	const diffDate = new Date(difference);

	return {
		months: diffDate.getMonth(),
		days: diffDate.getDate() - 1,
		hours: diffDate.getHours() - 1,
		minutes: diffDate.getMinutes(),
		seconds: diffDate.getSeconds(),
	};
};

const weddingDate = new Date("2023-05-13T11:30:00.000+02:00");

type ZeroOneFewMany = {
	one: string;
	few: string;
	many: string;
};

const czechPluralization = (count: number, { one, few, many }: ZeroOneFewMany): string => {
	switch (true) {
		case count === 1:
			return one;
		case [2, 3, 4].includes(count):
			return few;
		default:
			return many;
	}
};

type DigitProps = {
	count: number;
	pluralization: ZeroOneFewMany;
	hideWhenZero?: boolean;
};

export function Digit({ count, pluralization, hideWhenZero = false }: DigitProps) {
	if (hideWhenZero && count <= 0) return null;
	return (
		<div className="flex flex-col">
			<span className="countdown font-mono text-5xl">
				<span style={{ "--value": count } as CSSProperties}></span>
			</span>
			{czechPluralization(count, pluralization)}
		</div>
	);
}

export function CountDown() {
	const [dateDiff, setDateDiff] = useState<number>(dateDifference(weddingDate, new Date()));

	useTimeout(() => {
		setDateDiff(dateDifference(weddingDate, new Date()));
	}, 1_000);

	if (dateDiff <= 0) return <p className={"text-3xl"}>Svatba už proběhla.</p>;

	const { months, days, hours, minutes, seconds } = formatDateDifference(dateDiff);

	return (
		<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
			<Digit hideWhenZero count={months} pluralization={{ one: "měsíc", few: "měsíce", many: "měsíců" }} />
			<Digit hideWhenZero count={days} pluralization={{ one: "den", few: "dny", many: "dní" }} />
			<Digit count={hours} pluralization={{ one: "hodina", few: "hodiny", many: "hodin" }} />
			<Digit count={minutes} pluralization={{ one: "minuta", few: "minuty", many: "minut" }} />
			<Digit count={seconds} pluralization={{ one: "sekunda", few: "sekundy", many: "sekund" }} />
		</div>
	);
}

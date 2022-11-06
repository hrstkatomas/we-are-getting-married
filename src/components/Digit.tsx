import {
	czechPluralization,
	ZeroOneFewMany,
} from "../utils/czechPluralization";
import { CSSProperties } from "react";

type DigitProps = {
	count: number;
	pluralization: ZeroOneFewMany;
	hideWhenZero?: boolean;
};

export function Digit({
	count,
	pluralization,
	hideWhenZero = false,
}: DigitProps) {
	if (hideWhenZero && count <= 0) return null;
	return (
		<div className="flex flex-col">
			<span className="countdown font-mono text-4xl">
				<span style={{ "--value": count } as CSSProperties}></span>
			</span>
			{czechPluralization(count, pluralization)}
		</div>
	);
}

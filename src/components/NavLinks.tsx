import Link from "next/link";
import { trpc } from "../utils/trpc";

export function LinkToAttendance() {
	const response = trpc.useQuery(["attendance.givenAnswer"]);
	const attendance = response.data?.attendance || null;
	return (
		<Link href={"/attendance"} legacyBehavior>
			<a className={`btn ${attendance ? "btn-success" : "btn-active"}`}>
				{attendance ? "✓ Účast povrzena" : "Povrdit účast"}
			</a>
		</Link>
	);
}

export function LinkToHome() {
	return (
		<Link href={"/"} legacyBehavior>
			<a className={"btn btn-success"}>Vše je potvrzeno, můžem jít zpět na přehled.</a>
		</Link>
	);
}

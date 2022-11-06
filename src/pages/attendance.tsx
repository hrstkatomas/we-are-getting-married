import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import { Title } from "../components/Title";
import { useTheme } from "../components/DarkMode";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { Attendance } from "@prisma/client";
import { LinkToHome } from "../components/NavLinks";

function Attendance() {
	useTheme();
	const { data: session } = useSession();

	const response = trpc.useQuery(["attendance.givenAnswer"]);
	const attendance = response.data?.attendance || null;

	const step1Done = Boolean(session);
	const step2Done = Boolean(session && attendance);

	return (
		<main>
			<div
				className={
					"container mx-auto flex flex-col items-center justify-center p-4"
				}
			>
				<Title>Tady prosím potvrď svou účast</Title>
				<div>
					<ul className="steps steps-vertical lg:steps-horizontal m-10">
						<li
							className={`step ${
								step1Done ? "step-primary" : ""
							} mx-0 lg:mx-10`}
							data-content={step1Done ? "✓" : undefined}
						>
							Registrovat se
						</li>
						<li
							className={`step ${
								step2Done ? "step-primary" : ""
							}`}
							data-content={step2Done ? "✓" : undefined}
						>
							Potvrdit účast
						</li>
						<li className={`step`}>Dorazit na svatbu</li>
					</ul>
				</div>

				<div className="flex flex-col w-full lg:w-1/2">
					<div className="card bg-base-300 rounded-box shadow-xl">
						<div className="card-body">
							<h2 className="card-title">Registrace</h2>
							<SignIn session={session} />
						</div>
					</div>

					{step1Done && <div className="divider"></div>}

					{step1Done && (
						<div className="grid card bg-base-300 rounded-box shadow-xl">
							<div className="card-body">
								<AttendanceForm
									attendance={attendance}
									refetch={() => response.refetch()}
								/>
							</div>
						</div>
					)}

					{step2Done && <div className="divider"></div>}

					{step2Done && (
						<div className={"flex justify-center"}>
							<LinkToHome />
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

type SignInProps = {
	session: Session | null;
};

const SignIn = ({ session }: SignInProps) => {
	if (session) {
		return (
			<>
				<p>Jsi přihlášen jako {session.user?.email}</p>
				<div className="card-actions justify-end">
					<button
						className="btn btn-primary"
						onClick={() => signOut()}
					>
						Odhlásit se
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<p>Nejsi přihlášen</p>
			<div className="card-actions justify-end">
				<button
					className="btn btn-primary"
					onClick={() => signIn("auth0")}
				>
					Přihlásit se
				</button>
			</div>
		</>
	);
};

type AttendanceFormProps = {
	attendance: Attendance | null;
	refetch: () => void;
};

enum RequestState {
	IDLE,
	LOADING,
	SUCCESS,
}

export const AttendanceForm = ({
	attendance,
	refetch,
}: AttendanceFormProps) => {
	const [going, setGoing] = useState(true);
	const [numberOfAttendees, setNumberOfAttendees] = useState(1);
	const [letter, setLetter] = useState("");

	useEffect(() => {
		if (attendance) {
			setGoing(attendance.going);
			setNumberOfAttendees(attendance.numberOfAttendees);
			if (attendance.letter) setLetter(attendance.letter);
		}
	}, [attendance]);

	const [requestState, setRequestState] = useState(RequestState.IDLE);
	useEffect(() => {
		if (requestState === RequestState.SUCCESS) {
			setTimeout(() => {
				setRequestState(RequestState.IDLE);
				window.scrollTo({
					top: 100_000, // let's call this a bottom of a page.
					behavior: "smooth",
				});
			}, 2000);
		}
	}, [requestState]);

	const create = trpc.useMutation(["attendance.answer"]);
	const update = trpc.useMutation(["attendance.updateAnswer"]);

	const submitForm = () => {
		if (requestState === RequestState.IDLE) {
			setRequestState(RequestState.LOADING);
			(attendance ? update : create).mutate(
				{
					going,
					numberOfAttendees,
					letter,
				},
				{
					onSuccess: () => {
						refetch();
						setRequestState(RequestState.SUCCESS);
					},
				},
			);
		}
	};

	return (
		<>
			<h2 className="card-title">
				{attendance
					? "Tvou odpověď už známe, můžeš ji však upravit."
					: "Zde vyplň odpověď"}
			</h2>
			<div className="form-control">
				<label className="label cursor-pointer">
					<span className="label-text">Já přijdu!</span>
					<input
						type="checkbox"
						checked={going}
						onChange={() => setGoing((going) => !going)}
						className="checkbox checkbox-primary"
					/>
				</label>

				{going && (
					<label className="label cursor-pointer">
						<span className="label-text">Kolik nás přijde</span>
						<button
							className="btn"
							onClick={() =>
								setNumberOfAttendees((number) =>
									Math.max(1, number - 1),
								)
							}
						>
							-
						</button>
						<span>{numberOfAttendees}</span>
						<button
							className="btn"
							onClick={() =>
								setNumberOfAttendees((number) => number + 1)
							}
						>
							+
						</button>
					</label>
				)}

				<textarea
					className="textarea w-full"
					placeholder="Prostor pro doplňující informace nebo třeba přání"
					value={letter}
					onChange={(e) => setLetter(e.target.value)}
				></textarea>
			</div>

			<div className="card-actions justify-end">
				<button
					className={`btn ${
						requestState === RequestState.SUCCESS
							? "btn-success"
							: "btn-primary"
					} ${
						requestState === RequestState.LOADING ? "loading" : ""
					}`}
					onClick={submitForm}
				>
					{requestState === RequestState.LOADING
						? "Odesílám"
						: requestState === RequestState.SUCCESS
						? "Odpověď uložena"
						: attendance
						? "Upravit odpověď"
						: "Potvrdit účast"}
				</button>
			</div>
		</>
	);
};

export default Attendance;

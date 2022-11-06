import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { RequestState } from "../enums/RequestState";
import { Attendance } from "@prisma/client";

type AttendanceFormProps = {
	attendance: Attendance | null;
	refetch: () => void;
};

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
				/>
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

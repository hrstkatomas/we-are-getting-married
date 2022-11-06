type DateDifference = {
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

export const dateDifference = (date1: Date, date2: Date): number =>
	date1.getTime() - date2.getTime();

export const formatDateDifference = (difference: number): DateDifference => {
	const diffDate = new Date(difference);

	return {
		months: diffDate.getMonth(),
		days: diffDate.getDate() - 1,
		hours: diffDate.getHours() - 1,
		minutes: diffDate.getMinutes(),
		seconds: diffDate.getSeconds(),
	};
};

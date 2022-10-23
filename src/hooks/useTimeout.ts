import { useEffect, useCallback, useRef } from "react";

export const useTimeout = (
	callback: () => void, // function to call. No args passed.
	// if you create a new callback each render, then previous callback will be cancelled on render.
	timeout = 0, // delay, ms (default: immediately put into JS Event Queue)
): (() => void) => {
	const timeoutIdRef = useRef<ReturnType<typeof setTimeout>>();
	const cancel = useCallback(() => {
		const timeoutId = timeoutIdRef.current;
		if (timeoutId) {
			timeoutIdRef.current = undefined;
			clearTimeout(timeoutId);
		}
	}, [timeoutIdRef]);

	useEffect(() => {
		timeoutIdRef.current = setTimeout(callback, timeout);
		return cancel;
	}, [callback, timeout, cancel]);

	return cancel;
};

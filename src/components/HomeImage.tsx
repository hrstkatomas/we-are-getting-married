import Image from "next/image";
import welcomeImage from "../../public/Welcome.jpg";

export function HomeImage() {
	return (
		<div className={"relative h-full max-w-6xl m-auto"}>
			<Image
				placeholder={"blur"}
				src={welcomeImage}
				priority
				alt={"Úvodní fotka Toma a Zuzky"}
				layout={"fill"}
				objectFit={"cover"}
				quality={100}
			/>
		</div>
	);
}

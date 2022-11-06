import Image from "next/image";
import image from "../../public/BehnidTheScene.jpg";

export function BehindTheScenes() {
	return (
		<div
			className={
				"container mx-auto flex flex-col items-center justify-center p-4 -z-10 max-h-screen overflow-hidden"
			}
		>
			<Image
				placeholder={"blur"}
				src={image}
				alt={"Zuzka blbe"}
				layout={"fill"}
				objectFit={"cover"}
				quality={100}
			/>
		</div>
	);
}

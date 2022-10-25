import { Title } from "./Title";
import groomAvatar from "../../public/groomAvatar.jpg";
import brideAvatar from "../../public/brideAvatar.jpg";
import bestmanAvatar from "../../public/bestmanAvatar.jpeg";
import bridesWitnessAvatar from "../../public/bridesWitnessAvatar.jpeg";
import { Avatar } from "./Avatar";
import { CountDown } from "./CountDown";

export function Recapitulation() {
	return (
		<div className="bg-base-100">
			<div className={"container mx-auto flex flex-col items-center justify-center p-4"}>
				<Title>Rekapitulace</Title>
				<div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3 w-full">
					<div className={"text-base-content"}>
						<p className={"font-cairo text-3xl font-bold"}>13. května, 10:30 - 11:00</p>
						<p className={"font-dancing-sript text-xl font-bold my-6"}>to je za</p>
						<div className={"flex justify-center mb-8"}>
							<CountDown />
						</div>

						<div className="card bg-base-300 shadow-xl">
							<div className="card-body items-center text-center">
								<h2 className="card-title">Holyňská stodola</h2>
							</div>
							<iframe
								className={"w-full aspect-video"}
								loading="lazy"
								allowFullScreen
								src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ672Ch2iXC0cRXdr78q8ATQY&key=AIzaSyA2YeKQ2QLiZWlyQTQvSg1VZ-d69BBEj5I"
							/>
						</div>
					</div>
					<div className={"grid justify-center"}>
						<Avatar
							title={"ženich"}
							name={"Tomáš Hrska"}
							image={groomAvatar}
							imageAlt={"avatar ženicha"}
							phone={"721 325 591"}
							email={"hrstkatomas6@gmail.com"}
						/>
						<Avatar
							title={"nevěsta"}
							name={"Zuzka Hübnerová"}
							image={brideAvatar}
							imageAlt={"avatar nevěsty"}
							phone={"605 830 146"}
							email={"z.hubnerova@gmail.com"}
						/>
						<Avatar
							title={"svědek ženicha"}
							name={"Marek Hrstka"}
							image={bestmanAvatar}
							imageAlt={"avatar svědka"}
							phone={"739 668 446"}
							email={"mar.hrstka@gmail.com"}
						/>
						<Avatar
							title={"svědek nevěsty"}
							name={"Bára Šenková"}
							image={bridesWitnessAvatar}
							imageAlt={"avatar svědka nevěty"}
							phone={"776 290 991"}
							email={"bara.senkova@seznam.cz"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

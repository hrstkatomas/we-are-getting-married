import { Title } from "./Title";
import groomAvatar from "../../public/groomAvatar.jpg";
import brideAvatar from "../../public/brideAvatar.jpg";
import bestmanAvatar from "../../public/bestmanAvatar.jpeg";
import bridesWitnessAvatar from "../../public/bridesWitnessAvatar.jpeg";
import { Avatar } from "./Avatar";
import { CountDown } from "./CountDown";

export function Recapitulation() {
	return (
		<div className="bg-base-100" id={"recap"}>
			<div className={"container mx-auto flex flex-col items-center justify-center p-4"}>
				<Title>Rekapitulace</Title>
				<div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3 w-full">
					<div>
						<p className={"font-cairo text-primary-content text-xl font-bold"}>13. května</p>
						<p className={"font-cairo text-primary-content text-xl font-bold"}>10:30 - 11:00</p>
						<p className={"font-cairo text-primary-content text-xl font-bold"}>Holyňská stodola</p>
						<iframe
							className={"w-full aspect-video md:aspect-square"}
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ672Ch2iXC0cRXdr78q8ATQY&key=AIzaSyA2YeKQ2QLiZWlyQTQvSg1VZ-d69BBEj5I"
						/>
						<CountDown />
					</div>
					<div>
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
							email={"TODO"}
						/>
					</div>
				</div>
				{/*<div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">*/}
				{/*	{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}*/}
				{/*</div>*/}
				{/*<SignInButton />*/}
				{/*<AnswerButton />*/}
				{/*<UpdateMyAnswerButton />*/}
			</div>
		</div>
	);
}

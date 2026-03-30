import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Emblem from "./Emblem";

gsap.registerPlugin(useGSAP, SplitText);

function HeroSection() {
	useGSAP(() => {
		let titleSplit = SplitText.create(".title", {
			type: "words",
		});
		let split = SplitText.create(".excuse-text", {
			type: "chars",
		});

		let timeline = gsap.timeline();

		timeline.from(titleSplit.words, {
			y: 100,
			autoAlpha: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: "power4.out",
		});

		timeline.from(
			split.chars,
			{
				y: 50,
				stagger: {
					from: "random",
					each: 0.05,
				},
				autoAlpha: 0,
				duration: 0.2,
				ease: "back",
			},
			"1",
		);
	}, []);

	return (
		<section className="relative section section-sm flex flex-col min-h-screen justify-center overflow-hidden">
			<div className="flex flex-col md:flex-row h-full items-center justify-around mt-4 lg:mt-40 z-10 px-6">
				<div className="flex flex-col md:max-w-3xl gap-6">
					<div className="max-w-9xl flex flex-col overflow-hidden">
						<h2 className="title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
							Your website should bring you clients.
						</h2>

						<h2 className="excuse-text text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-red">
							Not Excuses
						</h2>
					</div>
					<div>
						<p>
							We build fast, converting websites and digital systems for South
							African businesses, designed to look world class and built to
							actually grow your revenue.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center mt-4">
					<Emblem className="size-50 md:size-100 lg:size-150" />
				</div>
			</div>
			<div className="container container-sm divide-x divide-solid flex gap-4 mt-20 md:mt-4">
				<div className="p-4 md:p-6">
					<h3 className="text-2xl md:text-4xl font-black">
						R5K <span className="text-sm font-light">Starting from</span>
					</h3>
				</div>
				<div className="p-4 md:p-6">
					<h3 className="text-2xl md:text-4xl font-black">
						14 days{" "}
						<span className="text-sm  font-light">Average delivery</span>
					</h3>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

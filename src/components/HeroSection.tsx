import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Emblem from "./Emblem";

gsap.registerPlugin(useGSAP, SplitText);

function HeroSection() {
	useGSAP(() => {
		const titleSplit = SplitText.create(".title", {
			type: "words",
			smartWrap: true,
		});

		const split = SplitText.create(".excuse-text", {
			type: "words",
		});

		const timeline = gsap.timeline();

		timeline.from(titleSplit.words, {
			yPercent: 100,
			opacity: 0,
			duration: 0.8,
			stagger: 0.05,
			ease: "expo.out",
		});

		timeline.from(
			split.words,
			{
				stagger: {
					from: "start",
					each: 0.01,
				},
				autoAlpha: 0,
				duration: 0.8,
				ease: "expo.out",
			},
			"1",
		);
	}, []);

	return (
		<section className="relative section section-sm flex flex-col min-h-screen justify-center overflow-hidden">
			<div className="flex flex-col md:flex-row  h-full items-center justify-around mt-4 lg:mt-5 z-10 px-6">
				<div className="flex flex-col md:max-w-5xl gap-6">
					<div className="max-w-9xl flex flex-col overflow-hidden">
						<h2 className="title text-4xl md:text-6xl lg:text-9xl font-semibold leading-tight lg:tracking-wide">
							Your website should bring you clients
						</h2>
						<h2 className="excuse-text text-4xl md:text-6xl lg:text-9xl font-semibold leading-tight text-red/70 lg:tracking-wide">
							Not Excuses
						</h2>
					</div>
					<div className="excuse-text">
						<p>
							We are your WebOps team. We build fast, converting websites and
							digital systems for South African businesses, designed to look
							world class and built to actually grow your revenue.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center mt-4">
					<Emblem className="size-50 md:size-100 lg:size-150" />
				</div>
			</div>
			<div className="numbers container container-sm items-center divide-x divide-solid flex justify-center mt-10 md:mt-4 w-full">
				<div className="p-4 md:p-6">
					<h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
						R5K{" "}
							<span className="text-sm font-light tracking-wider">
							Starting from
						</span>
					</h3>
				</div>
				<div className="p-4 md:p-6">
					<h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
						14 days{" "}
						<span className="text-sm font-light tracking-wider">
							Average delivery
						</span>
					</h3>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

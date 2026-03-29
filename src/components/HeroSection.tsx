import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import Emblem from "./Emblem";

gsap.registerPlugin(useGSAP, SplitText);

function HeroSection() {
	const containerRef = useRef<HTMLElement>(null);
	useGSAP(
		() => {
			const tl = gsap.timeline();

			// 1. Title Entrance
			const split = SplitText.create(".title", { type: "words" });
			tl.from(split.words, {
				opacity: 0,
				y: 40,
				stagger: 0.03,
				ease: "power3.out",
				duration: 0.8,
			});

			// 2. THE BULLSEYE SEQUENCE (Starts here)

			// STEP A: The Outer Rings "Search"
			// They start large and blurry, then snap to size
			tl.from(
				".emblem-ring",
				{
					scale: 1.5,
					rotation: 90,
					opacity: 0,
					stagger: 0.2, // Gives each ring time to "arrive"
					duration: 0.8,
					ease: "expo.out",
				},
				"-=0.4",
			);

			// STEP B: The Axis Calibration
			// The small ticks and dots pop in sequentially (North, South, West, East)
			tl.from(
				".emblem-axis path, .emblem-axis circle",
				{
					opacity: 0,
					scale: 0,
					stagger: 0.05,
					duration: 0.4,
					ease: "back.out(2)",
				},
				"-=0.2",
			);

			// STEP C: The Precision "X" Lock
			// The two lines of the X arrive from opposite directions and "slam" into center
			tl.from(
				".emblem-cross",
				{
					x: (i) => (i === 0 ? -100 : 100), // Slide in from left and right
					y: (i) => (i === 0 ? -100 : 100), // Slide in from top and bottom
					opacity: 0,
					duration: 0.6,
					stagger: 0.15, // One bar, then the next
					ease: "power4.inOut",
				},
				"-=0.3",
			);

			// STEP D: The Final "Focus" Flash
			// The very center dot flashes and settles
			tl.fromTo(
				".emblem-center",
				{ scale: 0, opacity: 0 },
				{
					scale: 1,
					opacity: 1,
					duration: 0.4,
					ease: "elastic.out(1, 0.3)",
				},
				"-=0.1",
			);

			// OPTIONAL: A subtle "pulse" once assembled to show it's "active"
			tl.to(".emblem-ring", {
				opacity: 0.8,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				stagger: 0.2,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="relative section section-sm flex flex-col min-h-screen justify-center overflow-hidden"
		>
			<div className="flex flex-col md:flex-row h-full items-center justify-around mt-4 lg:mt-40 z-10 px-6">
				<div className="flex flex-col md:max-w-3xl gap-6">
					<div className="max-w-9xl flex flex-col">
						<h2 className="title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
							Your website should bring you clients.
						</h2>
						<h2 className="title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-red">
							Not Excuses
						</h2>
					</div>
					<div>
						<p>
							I build fast, converting websites and digital systems for South
							African businesses, designed to look world class and built to
							actually grow your revenue.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center mt-4">
					<Emblem className="text-[#D6D6E6] size-50 md:size-100 lg:size-150" />
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

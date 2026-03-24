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
			className="relative flex min-h-screen justify-center overflow-hidden"
		>
			<div className="flex flex-col h-full items-center mt-40 z-10 px-6">
				<div className="flex justify-center md:mb-20 mb-8">
					<h2 className="badge badge-mauve">Web Agency · Pan-African</h2>
				</div>

				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-10 items-center">
					<div className="max-w-xl">
						<h2 className="title text-4xl md:text-6xl font-bold leading-tight">
							Your digital presence should open doors — not close them.
						</h2>
					</div>
					<div className="flex justify-center items-center">
						{/* We use 'text-[#D6D6E6]' here so 'currentColor' 
                          inside the SVG picks up the brand mauve/grey 
                        */}
						<Emblem className="text-[#D6D6E6]" height={240} width={240} />
					</div>
				</div>
			</div>

			{/* HAIKEI WAVE — Integrated as the footer of the section */}
			<div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
				<svg
					viewBox="0 475 900 126"
					preserveAspectRatio="none"
					className="w-full block"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M0 475L21.5 485C43 495 86 515 128.8 520.5C171.7 526 214.3 517 257.2 509C300 501 343 494 385.8 490C428.7 486 471.3 485 514.2 493.7C557 502.3 600 520.7 642.8 530.8C685.7 541 728.3 543 771.2 541.2C814 539.3 857 533.7 878.5 530.8L900 528L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
						fill="#b4befe"
					/>
				</svg>
			</div>
		</section>
	);
}

export default HeroSection;

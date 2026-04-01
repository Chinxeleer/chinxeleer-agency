import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

function ProblemSection() {
	// apply split text on the highlighted parts of the problem definition

	return (
		<section className="section section-sm section-problem section-color-2 min-h-screen">
			<div className="container container-sm">
				<h2 className="problem-title text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
					Every day your business has{" "}
					<span className="highlighted-problem-text text-red">
						no online presence
					</span>{" "}
					or a slow, outdated one, a competitor with a better site{" "}
					<span className="highlighted-problem-text text-teal">
						takes your customer
					</span>
					. That's not a design problem.{" "}
					<span className="highlighted-problem-text text-peach">
						It's a revenue problem
					</span>
					.
				</h2>
			</div>
			<div className="container container-sm mt-20 flex flex-col md:flex-row justify-between w-full">
				<div className="flex flex-col gap-6 lg:w-xs">
					<h3 className="text-7xl font-black text-base">70% +</h3>
					<p>
						Of South African internet users are on mobile, yet most SA business
						sites aren't built for it. Slow loads, broken layouts, missed sales.
					</p>
				</div>
				<div className="flex flex-col gap-6 lg:w-xs">
					<h3 className="text-7xl font-black text-base">R 0.00</h3>
					<p>
						Is what a website that earns if it doesn't convert. Most SA sites
						were built to look good in a presentation, not to book clients and
						close sales.
					</p>
				</div>
				<div className="flex flex-col gap-6 lg:w-xs">
					<h3 className="text-7xl font-black text-base">3 Sec</h3>
					<p>
						Is all you get before a visitor leaves. Generic templates, WordPress
						and AI generated sites don't make the cut. Speed and design are
						strategy.
					</p>
				</div>
			</div>
		</section>
	);
}

export default ProblemSection;

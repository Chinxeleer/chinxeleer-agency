import { useGSAP } from "@gsap/react";
import { createFileRoute } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CommonQuestionsSection from "@/components/CommonQuestionsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhySection from "@/components/WhySection";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	useGSAP(() => {
		const splitProblem = SplitText.create(".problem-title", {
			type: "words",
			smartWrap: true,
		});

		gsap.from(".numbers", {
			scrollTrigger: {
				trigger: ".title",
				start: "top 10%",
				end: "top 5%",
				toggleActions: "play none none none",
			},
			autoAlpha: 0,
			y: 10,
			duration: 0.8,
			ease: "expo.out",
		});

		gsap.from(splitProblem.words, {
			scrollTrigger: {
				trigger: ".section-problem",
				start: "top 80%",
				scrub: 1,
				end: "top 20%",
				toggleActions: "play none none none",
			},
			autoAlpha: 0,
			duration: 1,
			ease: "expo.out",
			stagger: 0.1,
		});
	}, []);

	return (
		<>
			<HeroSection />
			<ProblemSection />
			<WhySection />
			<Services />
			<Process />
			<CommonQuestionsSection />
			<CTA />
			<Footer />
		</>
	);
}

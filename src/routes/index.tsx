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

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	useGSAP(() => {}, []);

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

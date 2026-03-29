import { createFileRoute } from "@tanstack/react-router";
import CommonQuestionsSection from "@/components/CommonQuestionsSection";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<HeroSection />
			<ProblemSection />
			<WhySection />
			<Services />
			<Process />
			<CommonQuestionsSection />
			<CTA />
			<Footer/>
		</>
	);
}
